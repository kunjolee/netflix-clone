import './Footer.css'

import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__media'>
        <img src={facebook} alt='facebook-logo' />
        <img src={instagram} alt='instagram-logo' />
        <img src={twitter} alt='twitter-logo' />
        <img src={youtube} alt='youtube-logo' />

      </div>
      <div className='footer__info'>
        <div className='footer__container'>
          <p className='footer__text'>
            Audio and subtitles
          </p>
          <p className='footer__text'>
            Media Center
          </p>
          <p className='footer__text'>
            Privacy
          </p>
          <p className='footer__text'>
            Contact Us
          </p>
        </div>
        <div className='footer__container'>
          <p className='footer__text'>
            Audio Description
          </p>
          <p className='footer__text'>
            Investor Relations
          </p>
          <p className='footer__text'>
            Legal Notices
          </p>          
        </div>
        <div className='footer__container'>
          <p className='footer__text'>
            Help Center
          </p>
          <p className='footer__text'>
            Jobs
          </p>
          <p className='footer__text'>
            Privacy
          </p>
          <p className='footer__text'>
            Cookie Preference
          </p>
        </div>
        <div className='footer__container'>
          <p className='footer__text'>
            Gift Cards
          </p>
          <p className='footer__text'>
            Terms of Use
          </p>
          <p className='footer__text'>
            Corporate information
          </p>          
        </div>        
      </div>
      <p className='footer__rights'>Netflix clone made by &copy;Kunjo Lee</p>
    </footer>
  )
}
export default Footer