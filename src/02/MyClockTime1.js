import { useState } from "react";

const MyClockTime = () => {

    //let myTime = new Date().toLocaleTimeString();
    //state변수 선언
    const[myTime, setMyTime] = useState(new Date().toLocaleTimeString());
    //1초에 한 번씩 state변수 변경
    setInterval(()=>{
        setMyTime(new Date().toLocaleTimeString());
    }, 1000);

    return (
        <footer>
            <h1>{myTime}</h1>
        </footer>
    );
}

export default MyClockTime;