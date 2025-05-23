interface TabButtonProps {
  id: string;
  text: string;
  onSelect: () => void;
}

export const TabButton = ({ text, onSelect }: TabButtonProps) => {
  return <button onClick={onSelect}>{text}</button>;
};
