import { useNavigate } from 'react-router-dom';

import { auth } from '../../../firebase/auth';

import { useAppSelector } from '../../../app/hooks';
import { selectUser } from '../../../features/userSlice';

import { Navbar } from '../../';

import './ProfileScreen.css';

const ProfileScreen = () => {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();

  const signOut = () => {
    auth.signOut();
    navigate('/');
  }

  return (
    <div className='profileScreen'>
      <Navbar />      
      <div className='profileScreen__body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen__info'>
          <img 
            src='http://zoeice.com/assets/img/uploads/profile.png' 
            alt='avatar' 
          />

          <div className='profileScreen__details'>
            <h2>{user?.email}</h2>
            <div className='profileScreen__plans'>
              <h3>Plans (Current Plan: premium)</h3>
              <p className='profileScreen__renewal'>Renewal date: 04/03/2021</p>
              <div className='profileScreen__plans-container'>
                <div className='profileScreen__types'>
                  <div className='profileScreen__type'>
                    <p>Netflix Standard</p>
                    <p>1080p</p>
                  </div>
                  <div className='profileScreen__type'>
                    <p>Netflix Basic</p>
                    <p>480p</p>
                  </div>
                  <div className='profileScreen__type'>
                    <p>Netflix Premiun</p>
                    <p>4K+HDR</p>
                  </div>
                </div>
                <div className='profileScreen__buttons'>
                  <button className='profileScreen__button'>Subscribe</button>
                  <button className='profileScreen__button'>Subscribe</button>
                  <button className='profileScreen__button profileScreen__button--grayButton'>Current Package</button>
                </div>
              </div>

              <button 
                className='profileScreen__signOut'
                onClick={signOut}
              >
                Sign Out
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default ProfileScreen