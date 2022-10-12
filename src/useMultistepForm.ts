import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function nextStep() {
    setCurrentStepIndex((i) => {
      console.log("nextStep", i);
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function prevStep() {
    setCurrentStepIndex((i) => {
      if (i == 0) return i;
      return i - 1;
    });
  }

  function goToStep(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps: steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    next: nextStep,
    prev: prevStep,
    goTo: goToStep,
  };
}
