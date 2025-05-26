interface IImage {
  alt: string;
  src: string;
  width: string;
  height: string;
}

const Image = ({ ...rest }: IImage) => {
  return <img {...rest} />;
};

export default Image;
