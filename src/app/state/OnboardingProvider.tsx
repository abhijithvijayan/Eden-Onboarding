import * as React from 'react';

interface OnboardingProviderProps {
  children: React.ReactElement;
}

export interface OnboardingData {
  fullName: string;
  displayName: string;
  workspaceName: string;
  workspaceUrl: string;
  isTeam: boolean;
}

interface OnboardingContextProps {
  onboardingData: OnboardingData;
  onboardingStep: number;
  updateStep: () => void;
  updateOnboardingData: (key: string, value: string | boolean) => void;
}

const OnboardingContext = React.createContext<OnboardingContextProps>(null!);

export const useOnboarding = (): OnboardingContextProps => {
  const context = React.useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within the OnboardingProvider');
  }
  return context;
};

export const OnboardingProvider: React.FC<OnboardingProviderProps> = ({
  children,
}) => {
  const [onboardingData, setOnboardingData] = React.useState<OnboardingData>({
    fullName: '',
    displayName: '',
    workspaceName: '',
    workspaceUrl: '',
    isTeam: false,
  });
  const [onboardingStep, setOnboardingStep] = React.useState(0);

  const updateStep = (): void => {
    setOnboardingStep(onboardingStep + 1);
  };

  const updateOnboardingData = (key: string, value: string | boolean): void => {
    setOnboardingData((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  return (
    <OnboardingContext.Provider
      value={{
        onboardingData,
        onboardingStep,
        updateStep,
        updateOnboardingData,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};
