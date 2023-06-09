import style from './Taccident.module.css';

const TaccidentNav2 = ({c2, sel1, sel2, setSel2}) => {

    const c2Arr = c2.filter((item) => item[0] === sel1);



    //console.log('c2Arr', c2Arr)

    
    const btTag = c2Arr.map((item) => 
    
    <li key={item}>
        <button className={style.d2} onClick={() => setSel2(item)}>{item[1]}</button>
    </li>
    
    );
    
    return (
        <nav>
            <ul>
                <h3>사고유형 중분류</h3>
            </ul>
            <ul>
                {btTag}
            </ul>
        </nav>
    );
}

export default TaccidentNav2;