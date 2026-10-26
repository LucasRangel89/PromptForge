import { AppLayout } from '@/components/layout/AppLayout';
import { Library } from '@/components/library/Library';
import { ReferenceLibrary } from '@/components/references/ReferenceLibrary';
import { Studio } from '@/components/studio/Studio';
import { GuideModal } from '@/components/ui/GuideModal';
import { Toast } from '@/components/ui/Toast';
import { usePromptStore } from '@/store/usePromptStore';

export default function App() {
  const view = usePromptStore((state) => state.view);

  return (
    <AppLayout>
      {view === 'studio' ? <Studio /> : view === 'library' ? <Library /> : <ReferenceLibrary />}
      <GuideModal />
      <Toast />
    </AppLayout>
  );
}
