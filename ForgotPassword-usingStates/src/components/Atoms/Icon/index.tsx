interface IconType {
  source?: string;
}

const Icon = ({ source }: IconType) => {
  return <img src={source} width={30} height={30}></img>;
};

export default Icon;
