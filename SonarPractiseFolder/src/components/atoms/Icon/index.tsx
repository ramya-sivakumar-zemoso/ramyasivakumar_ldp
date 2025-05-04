interface IImageAtom {
  source: string;
}

const ImageAtom = ({ source }: IImageAtom) => {
  return <img src={source}></img>;
};

export default ImageAtom;
