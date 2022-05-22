import React from "react";

const DesktopShortcut = (props) => {
    return(
        <div onClick={() => props.handleOpen()}>
            <img src={props.image} alt='logo' className="h-16 mr-8 ml-16 hover:bg-black"/>
            <div className='mx-auto'>{props.fileName}</div>
        </div>
    );
}

export default DesktopShortcut;