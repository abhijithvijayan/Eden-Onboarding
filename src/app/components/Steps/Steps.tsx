import {OnboardingData} from '../../state/OnboardingProvider';
import {Button} from '../Button/Button';
import {Header} from '../Header/Header';
import {TickIcon} from '../icons/TickIcon';
import {UserIcon} from '../icons/UserIcon';
import {UsersIcon} from '../icons/UsersIcon';
import {InputGroup} from '../InputGroup/InputGroup';
import {TeamInfo} from '../TeamInfo/TeamInfo';
import {UrlInput} from '../UrlInput/UrlInput';
import './steps.styles.scss';

interface StepProps {
  data: OnboardingData;
  onChange: (key: string, value: string | boolean) => void;
  onComplete: () => void;
}

export const StepUserData: React.FC<StepProps> = ({
  data,
  onChange,
  onComplete,
}) => {
  const {fullName, displayName} = data;
  return (
    <div className="step">
      <Header
        title="Welcome! First things first..."
        sub="You can always change them later"
      />
      <div className="step__info">
        <InputGroup
          value={fullName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange('fullName', e.target.value)
          }
          placeholder="Steve Jobs"
          label="Full Name"
        />
        <InputGroup
          value={displayName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange('displayName', e.target.value)
          }
          placeholder="Steve"
          label="Display Name"
        />
        <Button onClick={onComplete}>Create Workspace</Button>
      </div>
    </div>
  );
};

export const StepWorkspace: React.FC<StepProps> = ({
  data,
  onChange,
  onComplete,
}) => {
  const {workspaceName, workspaceUrl} = data;
  return (
    <div className="step">
      <Header
        title="Let's setup a home for all your work"
        sub="You can always create another workspace later"
      />
      <div className="step__info workspace__container">
        <div className="workspace__container-info">
          <InputGroup
            value={workspaceName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange('workspaceName', e.target.value)
            }
            placeholder="Eden"
            label="Workspace Name"
          />
          <UrlInput
            url="www.eden.com/"
            placeholder="Example"
            label="Workspace URL"
            value={workspaceUrl}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange('workspaceUrl', e.target.value)
            }
            optional
          />
          <Button onClick={onComplete}>Create Workspace</Button>
        </div>
      </div>
    </div>
  );
};

export const StepTeam: React.FC<StepProps> = ({data, onChange, onComplete}) => {
  const {isTeam} = data;
  return (
    <div className="step">
      <Header
        title="How are you planning to use Eden?"
        sub="We'll streamline your setup experience accordingly"
      />
      <div className="step__info team__info-wrapper">
        <div className="team__info-wrapper-container">
          <div className="team__info-wrapper-container-holder">
            <TeamInfo
              icon={
                <UserIcon size={24} color={!isTeam ? '#664de5' : '#131b28'} />
              }
              selected={!isTeam}
              onClick={() => onChange('isTeam', false)}
              title="For myself"
              sub="Write better. Think more clearly. Stay organized"
            />
            <TeamInfo
              icon={
                <UsersIcon color={isTeam ? '#664de5' : '#131b28'} size={24} />
              }
              selected={isTeam}
              onClick={() => onChange('isTeam', true)}
              title="With my team"
              sub="Wikis, docs, tasks & projects, all in one place"
            />
          </div>
          <Button onClick={onComplete}>Create Workspace</Button>
        </div>
      </div>
    </div>
  );
};

export const StepComplete: React.FC<StepProps> = () => {
  return (
    <div className="step">
      <div className="step__complete">
        <TickIcon color="#664de5" size={64} />
        <Header
          title="Congratulation, Eren!"
          sub="You have completed onboarding, you can start using Eden"
        />
      </div>
      <div>
        <Button>Launch Eden</Button>
      </div>
    </div>
  );
};
