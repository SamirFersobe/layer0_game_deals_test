
import './Footer.css'
import facebook_icon from '../assets/images/facebook_social_media.png';
import twitter_icon from '../assets/images/twitter_social_media.png';
import google_icon from '../assets/images/google_plus_social_media.png';
function Footer() {
  return (
    <div className="footer">
    <ul className="footer-list">
        <li id="follow">フォロー</li>
        <li className="social"><a href="#facebook"><img src={facebook_icon} alt="facebook"></img></a></li>
        <li className="social"><a href="#twitter"><img src={twitter_icon}  alt="twitter"></img></a></li>
        <li className="social"><a href="#google"><img src={google_icon} alt="google"></img></a></li>
     
    </ul>
    

  </div> 
  );
}


export default Footer;