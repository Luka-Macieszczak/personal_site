import React, {useState} from 'react'
import Constants from '../Constants.js';
import MainHeader from '../Components/MainHeader';
import FileComponent from '../Components/FileComponent'; 
import DesktopShortcut from '../Components/DesktopShortcut.js';
import resumeImage from '../assets/PierogiIcon.png';

const Desktop = (props) => {
    const [closeFile, setCloseFile] = useState(false);
    return (
        <div>
            <MainHeader />
            {closeFile ? <div/> : <FileComponent fileContent={Constants.resume} filename="Resume.txt" closeFile={setCloseFile}/>}
            <DesktopShortcut fileName={'Resume.txt'} handleOpen={() => setCloseFile(false)} image={resumeImage}/>

        </div>
    );
}
 

 
export default Desktop;
 