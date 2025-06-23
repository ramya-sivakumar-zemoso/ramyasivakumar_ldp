import './index.css';

interface TextLinkType {
  link_text: string;
  support_text?: string;
}

export const TextLink = ({ link_text }: TextLinkType) => {
  return <a>{link_text}</a>;
};
