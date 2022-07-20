import { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeScreen, LoginScreen, ProfileScreen } from './components';

import { auth } from './firebase';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { login, logout, selectUser } from './features/userSlice';

import './App.css';

function App() {

  const dispatch = useAppDispatch();  
  const user = useAppSelector(selectUser);

  useEffect(() => {
    
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{      
      if (authUser) {

        dispatch(login({
          uid: authUser.uid,
          email: authUser.email
        }));
                
      } else {        
        dispatch(logout());        
      }
    })
    
    // onAuthStateChanged returns the unsubscribe function
    return unsubscribe
  }, [dispatch]);

  return (
    <div className="app">          
      <Router>                                  
      {
        !user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path='/profile' element={<ProfileScreen />}/>
            <Route path='/' element={ <HomeScreen /> }/>    
          </Routes>
        ) 
      }        
      </Router>
    </div>
  );
}

export default App;
