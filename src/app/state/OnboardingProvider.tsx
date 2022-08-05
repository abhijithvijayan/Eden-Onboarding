import {createContext, FC, useContext, useState} from 'react';

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

const OnboardingContext = createContext<OnboardingContextProps>(null!);

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within the OnboardingProvider');
  }
  return context;
};

export const OnboardingProvider: FC<OnboardingProviderProps> = ({children}) => {
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    fullName: '',
    displayName: '',
    workspaceName: '',
    workspaceUrl: '',
    isTeam: false,
  });
  const [onboardingStep, setOnboardingStep] = useState(0);

  const updateStep = () => {
    setOnboardingStep(onboardingStep + 1);
  };

  const updateOnboardingData = (key: string, value: string | boolean) => {
    setOnboardingData({
      ...onboardingData,
      [key]: value,
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
