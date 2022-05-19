import React, {useState} from 'react'
import Constants from '../Constants.js';
import MainHeader from '../Components/MainHeader';
import FileComponent from '../Components/FileComponent';

const Desktop = (props) => {
    const [closeFile, setCloseFile] = useState(false);
    return (
        <div>
            <MainHeader />
            {closeFile ? <div/> : <FileComponent fileContent={Constants.resume} filename="Resume.txt" closeFile={setCloseFile}/>}
        </div>
    );
}
 

 
export default Desktop;
 