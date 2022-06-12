import React, {useState} from 'react'
import Constants from '../Constants.js';
import MainHeader from '../Components/MainHeader';
import FileComponent from '../Components/FileComponent'; 
import DesktopShortcut from '../Components/DesktopShortcut.js';
import resumeImage from '../assets/PierogiIcon.png';
import DropdownMenu from '../Components/DropdownMenu.js';

const Desktop = (props) => {
    const [openAboutMenu, setOpenAboutMenu] = useState(false);
    const [openFile, setOpenFile] = useState(true);
    return (
        <div className='relative z-2'>
            <MainHeader aboutMenuHandler={setOpenAboutMenu}/>

            <DropdownMenu isAboutMenuOpen={openAboutMenu} />

            <FileComponent isFileOpen={openFile} fileContent={Constants.resume} filename="Resume.txt" openFile={setOpenFile}/> 

            <DesktopShortcut  fileName={'Resume.txt'} handleOpen={() => setOpenFile(true)} image={resumeImage}/>

        </div>
    );
}
 

 
export default Desktop;
 