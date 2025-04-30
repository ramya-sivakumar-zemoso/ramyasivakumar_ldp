interface IIcons {
  source: string;
  width?: string;
}

const Icons = ({ source, width }: IIcons) => {
  return <img src={source} width={width}></img>;
};

export default Icons;
