import 'dotenv/config';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { handleRefinePrompt } from './refinePrompt';

const app = express();
const port = Number(process.env.PORT || 3000);
const distPath = fileURLToPath(new URL('../dist', import.meta.url));

app.use('/api/refine-prompt', handleRefinePrompt);
app.use(express.static(distPath));
app.use((_request, response) => {
  response.sendFile('index.html', { root: distPath });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`PromptForge disponível em http://0.0.0.0:${port}`);
});
