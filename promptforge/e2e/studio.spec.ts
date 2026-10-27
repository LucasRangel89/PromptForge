import { expect, test, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const browserErrors = new WeakMap<Page, string[]>();

async function openLibrary(page: Page) {
  await page.getByRole('button', { name: 'Acervo de referências' }).filter({ visible: true }).click();
}

async function expectAccessible(page: Page) {
  const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
  expect(result.violations).toEqual([]);
}

async function expectNoOverflow(page: Page) {
  expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)).toBe(false);
}

test.beforeEach(async ({ page }) => {
  const errors: string[] = [];
  browserErrors.set(page, errors);
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  await page.goto('/PromptForge/', { waitUntil: 'networkidle' });
});

test.afterEach(async ({ page }) => {
  expect(browserErrors.get(page)).toEqual([]);
});

test('clima é filtrado, aplicado, sugerido e removido sem trocar a cena', async ({ page }) => {
  await openLibrary(page);
  await expect(page.locator('.reference-results-bar p')).toHaveText('Exibindo 24 de 1308 referências.');
  await page.locator('.reference-filter').nth(0).locator('select').selectOption({ label: 'Clima e tempo' });
  await page.locator('.reference-filter').nth(1).locator('select').selectOption({ label: 'Chuva' });
  await expect(page.locator('.reference-results-bar p')).toHaveText('Exibindo 5 de 5 referências.');
  await page.locator('.reference-search input').fill('Chuvisco persistente');
  const card = page.locator('.reference-card');
  await expect(card).toHaveCount(1);
  const output = await card.locator('p').getAttribute('title');
  await card.getByRole('button', { name: 'Aplicar Chuvisco persistente ao prompt' }).click();

  await expect(page.locator('.step-tab[aria-current="step"] strong')).toHaveText('Cena');
  await expect(page.locator('.choice-card.selected')).toContainText('Buenos Aires sob neve');
  await expect(page.getByLabel('Prompt gerado editável')).toHaveValue(new RegExp(output!));
  await page.locator('.reference-kind-tabs button').filter({ hasText: /^Clima$/ }).click();
  await expect(page.locator('.reference-suggestion-range')).toHaveText('1–6 de 46');
  const suggestion = page.locator('.reference-suggestion').first();
  const suggestedOutput = await suggestion.getAttribute('title');
  const suggestedName = (await suggestion.textContent())!.trim();
  await suggestion.click();
  await expect(page.getByLabel('Prompt gerado editável')).toHaveValue(new RegExp(suggestedOutput!));
  await expect(page.locator('.choice-card.selected')).toContainText('Buenos Aires sob neve');

  const weatherField = page.locator('.two-column-fields .field-group').nth(1);
  await weatherField.getByRole('button', { name: suggestedName, exact: true }).click();
  await expect(page.getByLabel('Prompt gerado editável')).not.toHaveValue(new RegExp(suggestedOutput!));
  await expect(page.locator('.choice-card.selected')).toContainText('Buenos Aires sob neve');
  await expectAccessible(page);
});

test('favoritos e recentes persistem, mantêm ordem e podem ser limpos', async ({ page }) => {
  await openLibrary(page);
  await page.locator('.reference-search input').fill('O Eternauta');
  await page.getByRole('button', { name: 'Adicionar O Eternauta aos favoritos' }).click();
  await page.locator('.reference-collections button').filter({ hasText: 'Favoritas' }).click();
  await expect(page.locator('.reference-results-bar p')).toHaveText('Exibindo 1 de 1 referência.');
  await expect(page.locator('.reference-card h2')).toHaveText('O Eternauta');

  await page.reload({ waitUntil: 'networkidle' });
  await openLibrary(page);
  await page.locator('.reference-collections button').filter({ hasText: 'Favoritas' }).click();
  await expect(page.locator('.reference-card h2')).toHaveText('O Eternauta');
  await page.getByRole('button', { name: 'Aplicar O Eternauta ao prompt' }).click();

  await openLibrary(page);
  await page.locator('.reference-collections button').filter({ hasText: 'Todas' }).click();
  await page.locator('.reference-filter').nth(0).locator('select').selectOption({ label: 'Clima e tempo' });
  await page.locator('.reference-search input').fill('Chuva fina');
  await page.getByRole('button', { name: 'Aplicar Chuva fina ao prompt' }).click();
  await openLibrary(page);
  await page.locator('.reference-collections button').filter({ hasText: 'Recentes' }).click();
  await expect(page.locator('.reference-card h2').nth(0)).toHaveText('Chuva fina');
  await expect(page.locator('.reference-card h2').nth(1)).toHaveText('O Eternauta');
  await expect(page.getByRole('button', { name: 'Atualizar sugestões' })).toHaveCount(0);

  await page.getByRole('button', { name: 'Limpar recentes' }).click();
  await expect(page.getByRole('heading', { name: 'Nenhuma referência aplicada ainda.' })).toBeVisible();
  await page.locator('.reference-collections button').filter({ hasText: 'Favoritas' }).click();
  await page.getByRole('button', { name: 'Remover O Eternauta dos favoritos' }).click();
  await expect(page.getByRole('heading', { name: 'Nenhuma referência favorita.' })).toBeVisible();
  await expectAccessible(page);
});

test('IDs obsoletos de coleções são descartados na reidratação', async ({ page }) => {
  await page.evaluate(() => {
    const key = 'promptforge-studio-v2';
    const stored = JSON.parse(localStorage.getItem(key) ?? '{"state":{},"version":1}');
    stored.state.favoriteReferenceIds = ['referencia-inexistente', 'core-anchor-o-eternauta'];
    stored.state.recentReferenceIds = ['outra-referencia-inexistente'];
    localStorage.setItem(key, JSON.stringify(stored));
  });
  await page.reload({ waitUntil: 'networkidle' });
  await openLibrary(page);
  await page.locator('.reference-collections button').filter({ hasText: 'Favoritas' }).click();
  await expect(page.locator('.reference-results-bar p')).toHaveText('Exibindo 1 de 1 referência.');
  await expect(page.locator('.reference-card h2')).toHaveText('O Eternauta');
  await page.locator('.reference-collections button').filter({ hasText: 'Recentes' }).click();
  await expect(page.getByRole('heading', { name: 'Nenhuma referência aplicada ainda.' })).toBeVisible();
});

test('prompt salvo permanece na Biblioteca após recarregar e pode ser restaurado', async ({ page }) => {
  const subject = 'Uma cartógrafa de sistemas climáticos imaginários';
  await page.getByLabel('Sua ideia principal').fill(subject);
  await page.getByRole('button', { name: 'Salvar prompt na Biblioteca' }).click();
  await page.locator('.sidebar-nav button[aria-label="Biblioteca"]').click();
  await expect(page.locator('.saved-card')).toHaveCount(1);
  await expect(page.locator('.saved-card-content > p')).toContainText(subject);

  await page.reload({ waitUntil: 'networkidle' });
  await page.locator('.sidebar-nav button[aria-label="Biblioteca"]').click();
  await expect(page.locator('.saved-card')).toHaveCount(1);
  await page.getByRole('button', { name: 'Abrir no estúdio' }).click();
  await expect(page.getByLabel('Prompt gerado editável')).toHaveValue(new RegExp(subject));
});

test('Cena e Acervo permanecem utilizáveis em telas estreitas', async ({ page }) => {
  await page.locator('.stepper button[aria-label="Cena: Mundo e ação"]').click();
  await page.locator('.reference-kind-tabs button').filter({ hasText: /^Clima$/ }).click();
  await expect(page.locator('.reference-suggestion-range')).toHaveText('1–6 de 46');
  for (const width of [320, 375, 768, 1280]) {
    await page.setViewportSize({ width, height: 850 });
    await expectNoOverflow(page);
  }
  await page.setViewportSize({ width: 320, height: 850 });
  await openLibrary(page);
  await expect(page.locator('.reference-collections button')).toHaveCount(3);
  await expectNoOverflow(page);
  await expectAccessible(page);
});
