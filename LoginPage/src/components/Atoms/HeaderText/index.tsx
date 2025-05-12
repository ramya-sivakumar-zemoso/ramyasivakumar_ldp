import './index.css';
interface HeaderProps {
  text: string;
}

export const HeaderText = ({ text }: HeaderProps) => {
  return <p id="header">{text}</p>;
};
