import {useState} from 'react'
import logo from './logo.svg';
import BootScreen from './screens/BootScreen.js';
import LoginScreen from './screens/LoginScreen';
import './App.css';
import Desktop from './screens/Desktop';

function App() {
  const [currentScreen, setCurrentScreen] = useState('boot')

  const clickHandler = () => {
    console.log('click')
    setCurrentScreen('login')
  }

  const style = {"background":"linear-gradient(rgba(18,16,16,0) 50%,rgba(0,0,0,.25) 50%),linear-gradient(\n    90deg,rgba(255,0,0,.06),rgba(0,255,0,.02),rgba(0,0,255,.06))","zIndex":"60","backgroundSize":"100% 4px,5px 100%"}

  const render = () => {
    if (currentScreen === 'boot'){
      return <BootScreen changeScreen={setCurrentScreen}/>
      
    } else if (currentScreen === 'login'){
      return <LoginScreen changeScreen={setCurrentScreen}/>
    } else {
      return <Desktop />
    }
  }
  //       <div className="relative top-96 h-screen BackGround"></div>

  return (
    <div style={style} className="BackGround h-screen absolute w-screen top-0 left-0"  >
      {render()}
    </div>
  );
}

export default App;
