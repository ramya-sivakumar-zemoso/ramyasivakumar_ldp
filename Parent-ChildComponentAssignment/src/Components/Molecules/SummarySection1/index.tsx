import './index.css';
import SummaryRowItem from '../SummaryRowItem';
type SummarySection1Type = {
  text1: string | React.ReactNode;
  text2?: string | React.ReactNode | (string & React.ReactNode);
  //text3?: string;
};
const SummarySection1 = ({ text1, text2 }: SummarySection1Type) => {
  return (
    <div id="summary-section">
      <SummaryRowItem t1={text1} t2={text2} />
    </div>
  );
};

export default SummarySection1;
