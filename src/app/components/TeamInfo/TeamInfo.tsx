import { FC } from "react";
import './teamInfo.styles.scss';

interface TeamInfoProps {
  icon: React.ReactElement;
  title: string;
  sub: string;
  selected: boolean;
  onClick: () => void;
}

export const TeamInfo: FC<TeamInfoProps> = ({ icon, selected, onClick, title, sub }) => {
  return (
    <div onClick={onClick} className={`team__info ${selected ? 'selected' : ''}`}>
      {icon}
      <h4 className="team__info-heading">{title}</h4>
      <p className="team__info-sub">{sub}</p>
    </div>
  );
};
