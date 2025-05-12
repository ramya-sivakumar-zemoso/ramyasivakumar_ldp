import './index.css';

interface SocialMediaCardType {
  sm_title: string;
  source: string;
}

const SocialMediaCard = ({ sm_title, source }: SocialMediaCardType) => {
  return (
    <div id="social-media-card">
      <img src={source}></img>
      <p>{sm_title}</p>
    </div>
  );
};

export default SocialMediaCard;
