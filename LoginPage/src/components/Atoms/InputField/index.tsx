import './index.css';
interface InputField {
  text: string;
}

export const InputField = ({ text }: InputField) => {
  return (
    <div id="input-fields">
      <input placeholder={text}></input>
    </div>
  );
};
