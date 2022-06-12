import React from "react";
import '../App.css';
const DesktopShortcut = (props) => {



    return(
        <div className={'relative bottom-96 z-0'} onClick={() => props.handleOpen()}>
            <img src={props.image} alt='logo' className="h-16 mr-8 hover:bg-black"/>
            <div className='mx-auto'>{props.fileName}</div>
        </div>
    );
}

export default DesktopShortcut;