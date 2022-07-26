import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  const [show, setShow] = useState(false);

  const navigate = useNavigate();


  const transitionNavbar = () => {
    window.scrollY > 100      
      ? setShow(true)
      : setShow(false)      
  }
  

  useEffect(() => { 
    window.addEventListener('scroll' , transitionNavbar);
    return () => window.removeEventListener('scroll', transitionNavbar)
  }, [])

  return (
    <div className={`navbar ${show && 'nav__black'}`}>
      <div className='navbar__contents'>
        <img
          className='navbar__logo' 
          src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt='netflix-logo' 
          onClick={() => navigate('/')}
        />
        <img 
          className='navbar__avatar'
          src='http://zoeice.com/assets/img/uploads/profile.png'
          alt='profile' 
          onClick={() => navigate('/profile')}
        />        
      </div>
    </div>
  )
}
export default Navbar