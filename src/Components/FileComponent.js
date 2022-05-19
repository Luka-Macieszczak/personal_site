import { getMouseEventOptions } from '@testing-library/user-event/dist/utils'
import React, {useState} from 'react'



const FileComponent = ({filename, closeFile, fileContent}) => {

    const [windowPos, setWindowPos] = useState([0,0])

    const handleDrag = () => {
        console.log(getMouseEventOptions().movementX);
    }

    return (
        <div onMouseDown={() => handleDrag()} className="h-192 m-10 opacity-100">
            <div 
            className="flex flex-row h-8 w-1/3 bg-black p-1"
            >
                <div 
                className="h-4 bg-white mt-1 ml-1 rounded-full w-4 hover:bg-red-400"
                onClick={() => closeFile(true)}
                ></div>
                <h1 className="text-white font-mono m-auto">{filename}</h1>
            </div>
        
                <textarea defaultValue={fileContent} className="h-192 w-1/3 outline-none"></textarea>
        </div>
    );
}

 
export default FileComponent;
 