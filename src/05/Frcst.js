import data from './dataFrcst.json'
import style from './Frcst.module.css'
import { useState } from 'react'; //state 변수 1단계 : import

const Frcst = () => {
    
    //날짜정보 순서대로 정렬하는 배열
    const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];
    const cnKey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];

    //dtKey.map((item)=>console.log('dt', data[item]));
    //cnKey.map((item)=>console.log('cn', data[item]));

    //날짜데이터와 날씨데이터를 매칭돼서 함께 출력하게 만드는 오브젝트
    let dtcn = {};
    dtKey.map((item, idx) => dtcn [data[item]] = data[cnKey[idx]]);
    //console.log(dtcn);

    //state 변수 2단계 : 변수 선언
    const[bodyTag, setBodyTag] = useState('');
    const[selDt, setSelDt] = useState();


    //클릭하면 실행할 함수
    const detail = (k) => {
        let dtcnItem = dtcn[k].split(',')
        setSelDt (k);
        dtcnItem = dtcnItem.map((item) => item.split(':'))
        dtcnItem = dtcnItem.map((item) =>
                        <div key={item[0]}>
                            <span className={style.sp1}>{item[0]}</span>
                            {item[1].trim() == '낮음'? <span className={style.sp21}>{item[1]}💙</span>
                            : item[1].trim() == '보통' ? <span className={style.sp22}>{item[1]}💚</span>
                        :<span className={style.sp23}>{item[1]}❤</span>}
                        </div>);


        console.log(dtcnItem)
        //state 변수 3단계 : 값 변경
        setBodyTag(dtcnItem)
    } 
    
    

    let dtTag = [];
    dtTag = Object.keys(dtcn).map((item, idx) => 
                        <div className={selDt === item ? style.dt1 : style.dt} 
                        key={idx} 
                        onClick={() => detail(item)}>
                            {item}
                        </div>
                        
    ); //결과가 배열이 된다



    
 
    return (
        <main className='container'>
            <article>
                <header className={style.a1}>
                    <h1>☁초미세먼지 주간예보☁</h1>
                    </header>    
                    <div className='grid'>
                     {dtTag}
                    </div>
                    <footer className={style.a2}>
                    <div className='grid'>
                    {bodyTag}
                    </div>
                    </footer>
                
            </article>

        </main>
    )
}

export default Frcst;