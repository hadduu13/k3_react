import { useState } from "react";

const MyClockTime = () => {

    let t = new Date().toLocaleTimeString();
    const[myTime, SetMyTime] = useState(0);

    let cnt = 0;
    setTimeout(console.log(++cnt), 1000);

    return (
        <footer>
            <h1>{myTime}</h1>
        </footer>
    );
}

export default MyClockTime;