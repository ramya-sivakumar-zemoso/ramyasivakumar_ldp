interface ImageAtomType {
  source: string;
}
const ImageAtom = ({ source }: ImageAtomType) => {
  return <img src={source} />;
};

export default ImageAtom;
