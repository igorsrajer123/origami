interface IToggleProps {
  isChecked: boolean;
  onClick: () => void;
}

const Toggle = ({ isChecked, onClick }: IToggleProps) => {
  return (
    <input
      type="checkbox"
      className="toggle toggle-lg"
      checked={isChecked}
      onClick={onClick}
    />
  );
};

export default Toggle;
