import { useMemo } from "react";
import {
  StepComplete,
  StepTeam,
  StepUserData,
  StepWorkspace,
} from "./components/Steps/Steps";
import { useOnboarding } from "./state/OnboardingProvider";
import "./index.styles.scss";
import { MainHeader } from "./components/MainHeader/MainHeader";
import { ProgressIndicator } from "./components/ProgressIndicator/ProgressIndicator";

const steps = [StepUserData, StepWorkspace, StepTeam, StepComplete];

export const App = () => {
  const { onboardingData, onboardingStep, updateStep, updateOnboardingData } =
    useOnboarding();

  const StepElement = useMemo(() => steps[onboardingStep], [onboardingStep]);

  return (
    <div className="onboarding">
      <div className="onboarding__steps">
        <MainHeader />
        <ProgressIndicator />
        <StepElement
          data={onboardingData}
          onChange={updateOnboardingData}
          onComplete={updateStep}
        />
      </div>
    </div>
  );
};

export default App;
