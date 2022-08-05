import "./inputGroup.styles.scss";

interface InputGroupProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputGroup: React.FC<InputGroupProps> = ({
  onChange,
  label,
  placeholder,
  value,
}) => {
  return (
    <div className="input__group">
      <span className="input__group-label">{label}</span>
      <input
        onChange={onChange}
        className="input__group-input"
        placeholder={placeholder}
        type="text"
        value={value}
        name={label}
      ></input>
    </div>
  );
};
