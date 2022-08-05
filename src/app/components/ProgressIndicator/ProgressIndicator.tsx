import * as React from 'react';
import {useOnboarding} from '../../state/OnboardingProvider';
import './progressIndicator.styles.scss';

interface ProgressIndicatorProps {
  length?: number;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  length = 4,
}) => {
  const steps = React.useMemo(
    () => Array.from({length}, (_, i) => `progress__indicator${i}`),
    [length]
  );

  const {onboardingStep} = useOnboarding();

  return (
    <div className="progress__indicator-wrapper">
      <div className="progress__indicator">
        <div
          className="progress__indicator-fill"
          style={{width: `${(100 / length) * (onboardingStep + 1)}%`}}
        />
        {steps.map((step, index) => (
          <div
            key={step}
            style={{
              left: `${(100 / (length - 1)) * index}%`,
            }}
            className={`progress__indicator-step ${
              onboardingStep >= index ? 'filled' : ''
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};
