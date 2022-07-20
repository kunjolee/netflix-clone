import { useNavigate } from 'react-router-dom';

import { auth } from '../../firebase/auth';

import { useAppSelector } from '../../app/hooks';
import { selectUser } from '../../features/userSlice';

import { Navbar } from '../';

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

          <div className="profileScreen__details">
            <h2>{user?.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans </h3>
              <p>Hola nems</p>
              <p>Hola nems</p>
              <p>Hola nems</p>

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