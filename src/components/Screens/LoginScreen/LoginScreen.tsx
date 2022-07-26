import { MouseEvent, useState } from 'react';

import { SignUpScreen } from '../';

import './LoginScreen.css';

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSignIn(true)
  }

  return (
    <div className='loginScreen'>      
      <div className='loginScreen__background'>
        <img 
          className='loginScreen__logo'
          src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='loginScreen-logo'  
        />
        <button onClick={handleClick} className='loginScreen__button'>
          Sign In
        </button>        
        <div className='loginScreen__gradient' />
      </div>
      <div className='loginScreen__body'>
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited Films, TV programmes and more.</h1>
            <h2>Watch anywere. Cancel at any time</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership</h3>
            <div className='loginScreen__input'>
              <form className='loginScreen__form'>
                <input type='email' 
                  placeholder='Email Address'                
                />
                <button 
                  type='submit'
                  className='loginScreen__getStarted' onClick={handleClick}>
                  GET STARTED
                </button>
              </form>          
            </div>
          </>
        )}
      </div>
    </div>
  )
}
export default LoginScreen


