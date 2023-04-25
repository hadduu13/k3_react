import style from '../04/MyDiv.module.css';
//컴포넌트에 적용
import '../04/MyDiv.css';
//전역으로 적용

//state 변수사용 1단계
import {useState} from 'react';

//const MyDivArticle = (probs) => {
//매개변수를 probs 사용ㅎ지 않고 오브젝트에 매개변수명을 넣어서 사용

    const MyDivArticle = ({aname}) => {
    // const aname = probs.aname;
    let n = (aname === undefined) ? '0' : aname.slice(-1);
    //let cnt = 0;

    //state 변수사용 2단계: 변수선언
    const [cnt, setCnt] = useState(0);

    const like = ()=>{
        //cnt = cnt+1; 
        //state 변수사용 3단계: 변수 내용 변경
        setCnt(cnt + 1);
        console.log(cnt)

    }
    console.log(n);
    return (
        <article>
            <header><h1 className={style.mah1}>{aname || 'MyDiv0'}</h1></header>
            <ul className={style.aul}>
                <li className={style.ali}>{n === '0' ? 'MyDiv0' : 'MayDiv' +n }1</li>
                <li className={style.ali}>{'MyDiv' +n }2</li>
            </ul>
            { n === '1' &&
                <footer>
                    <h2><span onClick={() => like()}>💖</span> {cnt}</h2>
                </footer>
            }
        </article>
    );
}

export default MyDivArticle ;