import { getMouseEventOptions } from '@testing-library/user-event/dist/utils'
import PreviousMap from 'postcss/lib/previous-map'
import React, {useState} from 'react'



const FileComponent = (props) => {

    const [windowPos, setWindowPos] = useState([0,0])

    const handleDrag = () => {
        console.log(getMouseEventOptions().movementX);
    }

    return (
        <div className="h-192 m-10 relative z-20 opacity-100">
            {props.isFileOpen ? 
                <div onMouseDown={() => handleDrag()} className="h-192 m-10 relative z-20 opacity-100">
                    <div 
                    className="flex flex-row h-8 w-1/3 bg-black p-1"
                    >
                        <div 
                        className="h-4 bg-white mt-1 ml-1 rounded-full w-4 hover:bg-red-400"
                        onClick={() => props.openFile(false)}
                        ></div>
                        <h1 className="text-white font-mono m-auto">{props.filename}</h1>
                    </div>
                
                    <textarea defaultValue={props.fileContent} className="h-192 w-1/3 outline-none"></textarea>
                </div> :
                <div></div>
            }
            
        </div>
    );
}

 
export default FileComponent;
 