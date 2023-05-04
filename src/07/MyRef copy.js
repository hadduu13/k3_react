import { useState, useRef } from "react";

const MyRef = () => {

    let cnt1 = 1;
    const[cnt2, setCnt2] = useState(1);
    const cnt3 = useRef(1);

    const showCnt = () => {
        console.log('cnt1 =', cnt1, 'cnt2 =', cnt2, 'cnt3 =', cnt3.current);
    }

    const showCnt1 = () => {
        cnt1 = cnt1 + 1;
        showCnt();
    }
    //웹 페이지에 표시 안 됨, 콘솔에만 표시.

    const showCnt2 = () => {
        setCnt2(cnt2 + 1);
        showCnt();
    }
    //웹 페이지에 표시됨(바뀔때마다 랜더링됨), 바뀔때마다 재랜더링됨.

    const showCnt3 = () => {
        cnt3.current = cnt3.current + 1;
        showCnt();
    }
    //콘솔창에는 바뀌는게 보이지만 랜더링이 되기 전에는 웹 페이지에는 보이지 않는다, 재랜더링되면 화면에 표시됨.

    return (
        <main className="container">
            <article>
                <header>
                    <div className="grid">
                        <div><h1>컴포넌트 변수 : {cnt1}</h1></div>
                        <div><h1>State 변수 : {cnt2}</h1></div>
                        <div><h1>Ref 변수 : {cnt3.current}</h1></div>
                    </div>
                </header>
                <div className="grid">
                    <button onClick={() => showCnt1()}>컴포넌트 변수</button> 
                    <button onClick={() => showCnt2()}>State 변수</button> 
                    <button onClick={() => showCnt3()}>Ref 변수</button> 
                </div>
            </article>
        </main>
    );
}

export default MyRef;