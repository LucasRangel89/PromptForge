import React from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { usePromptStore } from '@/store/usePromptStore';
import { Step1Anchor } from '@/components/steps/Step1Anchor';
import { Step2World } from '@/components/steps/Step2World';
import { Step3Scene } from '@/components/steps/Step3Scene';
import { Step4Language } from '@/components/steps/Step4Language';
import { Step5Synthesis } from '@/components/steps/Step5Synthesis';

export default function App() {
  const step = usePromptStore(state => state.step);

  return (
    <AppLayout>
      {step === 1 && <Step1Anchor />}
      {step === 2 && <Step2World />}
      {step === 3 && <Step3Scene />}
      {step === 4 && <Step4Language />}
      {step === 5 && <Step5Synthesis />}
    </AppLayout>
  );
}
