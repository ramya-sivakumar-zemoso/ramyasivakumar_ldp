interface IIcons {
  source: string;
  width?: string;
  height?: string;
  alt: string;
}

const Icons = ({ source, width, alt, height }: IIcons) => {
  return <img src={source} width={width} alt={alt} height={height} />;
};

export default Icons;
