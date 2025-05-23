import SocialMediaCard from '../../Atoms/SocialMediaCard';
import './index.css';
const SocialMediaLogin = () => {
  return (
    <div id="social-media-login">
      <SocialMediaCard
        sm_title="Google"
        source="https://icon2.cleanpng.com/20240216/gkb/transparent-google-logo-iconic-google-logo-with-blue-green-and-1710875585209.webp"
      />
      <SocialMediaCard
        sm_title="Stripe"
        source="https://images.icon-icons.com/2699/PNG/512/stripe_logo_icon_167962.png"
      />
      <SocialMediaCard
        sm_title="Xero"
        source="https://e7.pngegg.com/pngimages/128/489/png-clipart-logo-xero-brand-font-accounting-services-icon-blue-text-thumbnail.png"
      />
    </div>
  );
};

export default SocialMediaLogin;
