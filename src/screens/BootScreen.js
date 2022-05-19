import React, {useEffect, useState} from 'react'


const textClass = "text-white font-mono text-2xl"
const textContainerClass = "mb-10"


const BootScreen = ({changeScreen}) => {
    const [showPar, setShowPar] = useState(0);
    useEffect(() => {
        setTimeout(() => {setShowPar(1)}, 1000)
        setTimeout(() => {setShowPar(2)}, 2000)
    },[])

    const middlePar = () => {
        if (showPar === 1 || showPar == 2) {
            return (
                <div className={textContainerClass}>
                        <h1 className={textClass}>Mem. Test: 16384K OK</h1>
                        <h1 className={textClass}>Initializing USB Controllers ... Done</h1>
                    </div>
            );
        }
    }

    const lastPar = () => {
        if(showPar === 2) {
            return(
                <div className={textContainerClass}>
                    <h1 className={textClass}>Press Any Key to Continue \{'>'} </h1>
                </div>
            );
        }
    }
    

    const clickHandler = () => {
        if(showPar === 2)
            changeScreen('login')
    }
    return (
        <div className="fixed h-screen top-0 bg-black  left-0 w-screen px-32 py-32" 
        onKeyPress={() => clickHandler()}
        onClick={() => clickHandler()}>
            <div className={textContainerClass}>
                <h1 className={textClass}>Mac. OS</h1>
                <h1 className={textClass}>Copyright (C) 2022-2023</h1>
                <h1 className={textClass}>BIOS Version 202206541 Release 1</h1>
            </div>

            {middlePar()}
            
            {lastPar()}
            
        </div>
    );
}
 

export default BootScreen;
 