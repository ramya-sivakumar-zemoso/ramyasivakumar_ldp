import './index.css';
interface ActionButtonType {
  button_text: string;
}

export const ActionButton = ({ button_text }: ActionButtonType) => {
  return (
    <button>
      <span>{button_text}</span>
    </button>
  );
};
