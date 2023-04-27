import MyClockImage from "./MyClockImage";
import MyClockTime from "./MyClockTime1";
import '../01/Hello.css';

const MyClock = () => {

    return (
        <main className="container">
            <article data-theme="dark">
                <MyClockImage />
                <MyClockTime />
            </article>
        </main>
    );
}

export default MyClock;