import React, {useEffect, useState} from 'react'
import {FaBeer} from 'react-icons/fa'
import pierogi from '../assets/PierogiIcon.png'
import '../App.css';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const weekNames = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

const MainHeader = (props) => {

    const getMonth = () => {
        let d = new Date();
        let month = d.getMonth();
        return monthNames[month-1]
    }

    const getDay = () => {
        let d = new Date();
        let day = d.getDay()        
        return weekNames[day - 1]
    }

    const getTime = () => {
        let d = new Date();
        let hours = d.getHours();
        if (hours > 12)
            hours -= 12;
        let minutes = d.getMinutes();
        return minutes < 10 ? `${hours}:0${minutes}` : `${hours}:${minutes}`
        
    }

    const [time, setTime] = useState(getTime());

    useEffect(() => {
        setInterval(() => {
            setTime(getTime());
        }, 1000);
        
    }, []);

    return (
        <div className="bg-gray-100 flex flex-row ">
            <div className="flex flex-row p-1 w-1/2">
                <img src={pierogi} alt='logo' className="h-8 mr-8 ml-4 hover:bg-black"/>
                <h1 onClick={() => props.onClickFile()} className="m-1 mx-4 hover:bg-black hover:text-white">File</h1>
                <h1 className="m-1 mx-4 hover:bg-black hover:text-white">Edit</h1>
                
            </div>
            <div className="flex flex-row-reverse p-1 w-1/2">
                <h1 className="m-1 mx-4 hover:bg-black hover:text-white">{time}</h1>
                <h1 className="m-1 mx-4 hover:bg-black hover:text-white">{getDay()}</h1>
                <h1 className="m-1 mx-4 hover:bg-black hover:text-white">{getMonth()}</h1>
                
            </div>
        </div>
    );
}
 
export default MainHeader;
 