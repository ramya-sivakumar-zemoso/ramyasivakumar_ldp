interface IconType {
  source: string;
}

const Icon = ({ source }: IconType) => {
  return <img src={source} />;
};

export default Icon;
