import ContractTable from '../ContractTable';
import SummaryCardHeader from '../../molecules/SummaryCardHeader';
import './index.css';
import { StyledPaper } from '../../atoms/Paper/Paper.styles';
const TableSection = () => {
  return (
    <StyledPaper customheight="600">
      <section id="contract-table">
        <SummaryCardHeader text="Your Contracts" />
      </section>
      <ContractTable />
    </StyledPaper>
  );
};

export default TableSection;
