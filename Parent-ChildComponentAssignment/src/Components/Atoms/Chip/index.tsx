import { ResetChip } from './index.styles';
interface MUIChipType {
  label: React.ReactNode;
}
export const MUIChip = ({ label }: MUIChipType) => {
  return (
    <div>
      <ResetChip label={label}></ResetChip>
    </div>
  );
};
