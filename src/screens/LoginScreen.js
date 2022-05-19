import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
const LoginScreen = ({changeScreen}) => {
    const clickHandler = () => {
        console.log(changeScreen)
        changeScreen('desktop')
    }
  return (
        <div 
        onClick={() => clickHandler()}
        className="BackGround mx-auto p-10 my-100 w-52 h-52 rounded-3xl bg-gray-300 hover:border-2 hover:border-black relative z-0">
            <FaUserCircle color="white" className="h-20 w-20 m-auto"/>
            <h1 className="text-white font-mono m-auto ml-100 text-3xl mt-5">Guest</h1>
        </div>
  );
}
 

 
export default LoginScreen;
 