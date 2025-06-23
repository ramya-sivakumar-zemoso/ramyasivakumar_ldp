import './index.css';
interface CardDetails {
  Label: string;
  Value: number;
}
export const CardDetails = ({ Label, Value }: CardDetails) => {
  return (
    <ul>
      <h2>{Label}</h2>
      <p>{Value}</p>
    </ul>
  );
};
