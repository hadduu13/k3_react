import BoxRows1 from "./BoxRows";
import { useState, useRef, useEffect } from "react";

const Box = () => {
    const [ mvlist, setMvlist ] = useState();

    let seldt;

    useEffect(() => {
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        seldt = yesterday.getFullYear();

        let month = yesterday.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;

        let day = yesterday.getDate();
        day = day < 10 ? `0${day}` : day;

        seldt = `${seldt}${month}`;
        seldt = `${seldt}${day}`;

        console.log('yesterday = ', seldt)
        dt1.current.value = `${yesterday.getFullYear()}-${month}-${day}`;
        getData(seldt);

    }, []);
    
    //날짜입력창
    const dt1 = useRef();


    //날짜 선택
    const getDt = () => {
        
        seldt = dt1.current.value.replaceAll('-', '');
        console.log("seldt= ", seldt);
        getData(seldt);

       
    }   
    
    //데이터 가져오기
    const getData = (seldt) => {

        let url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt='
        url = url+seldt;

        console.log(url);

        fetch(url)
        .then((resp) => resp.json())
        .then((data) => setMvlist(data.boxOfficeResult.dailyBoxOfficeList))
        .catch((err) => console.log(err))

        console.log(url);
    }
    return (
        <main className="container">
            <article>
                <header id="c1">
                    <nav>
                        <ul><li>
                            <h1>🍿<cite>Daily BoxOffice</cite>🎬</h1>
                        </li></ul>
                        <ul><li>
                            <input ref={dt1} type="date" id = "dt1" name = "dt1" onChange={() => getDt()}/>
                        </li></ul>
                    </nav>
                </header>
                <table>
                    <thead id="b2">
                        <tr>
                            <th scope="col">#️⃣</th>
                            <th scope="col">Title</th>
                            <th scope="col">Sales Amt.</th>
                            <th scope="col">💹</th>
                        </tr>
                    </thead>
                        {mvlist &&<BoxRows1 mv={mvlist} />} 
                </table>
            </article>
        </main>
    );
}

export default Box;