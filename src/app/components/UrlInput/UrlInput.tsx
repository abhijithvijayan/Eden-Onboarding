import * as React from 'react';
import './urlInput.styles.scss';

interface UrlInputProps {
  label: string;
  placeholder: string;
  url: string;
  optional: boolean;
  value: string;
  hint: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UrlInput: React.FC<UrlInputProps> = ({
  label,
  placeholder,
  url,
  onChange,
  value,
  hint,
}) => {
  return (
    <div className="url__input">
      <span className="url__input-label">{label}</span>
      <span className="url__input-hint">{hint}</span>
      <div className="url__input-holder">
        <div className="url__input-holder-url">
          <span>{url}</span>
        </div>
        <input
          className="url__input-holder-input"
          placeholder={placeholder}
          type="text"
          name={label}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
