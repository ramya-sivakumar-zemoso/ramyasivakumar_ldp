import { styled, Stack } from '@mui/material';

interface StyledStackProps {
  customWidth?: number | string;
  customHeight?: number | string;
  customGap?: number | string;
  customJustify?: string;
  customAlign?: string;
  customDisplay?: string;
  customMargin?: number;
  customPadding?: number;
}

export const StyledStack = styled(Stack)<StyledStackProps>((props) => ({
  width: props.customWidth || 276,
  height: props.customHeight || 126,
  gap: props.customGap || 14,
  display: props.customDisplay || 'flex',
  justifyContent: props.customJustify || 'space-between',
  alignItems: props.customAlign || 'center',
  marginTop: props.customMargin || 5,
  //padding: props.CustomPadding || 10,
}));
