import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { HomeScreen, LoginScreen } from './components';
import './App.css';

function App() {

  // const user = {
  //   name: "kunjo",
  // }

  const user = null;

  return (
    <div className="app">          
      <Router>
        {
          !user ? (
            <LoginScreen />
          ) : (
            <Routes>
              <Route path='/' element={ <HomeScreen /> }/>    
            </Routes>
          ) 
        }        
      </Router>
    </div>
  );
}

export default App;
