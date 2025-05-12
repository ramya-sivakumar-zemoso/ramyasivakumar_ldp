import StyledTypography from './index';

interface StyledTypographyType {
  children?: string;
}

const HeadTypography = ({ children }: StyledTypographyType) => {
  return <StyledTypography>{children}</StyledTypography>;
};

export default HeadTypography;
