import Tdata from './dataTaccident.json';
import TaccidentDetail from './TaccidentDetail';
import TaccidentNav1 from "./TaccidentNav1";
import TaccidentNav2 from "./TaccidentNav2";
import style from "./Taccident.module.css";
import {useState, useEffect} from 'react';

const Taccident = () => {

    //console.log(data.data);
    const data = Tdata.data; //사고선수 obj 배열
    let c1 = data.map((item) => item.사고유형_대분류)
    c1 = new Set(c1); //set은 중복되는 데이터 없음
    c1 = [...c1];

    const c2 = data.map((item) => [item.사고유형_대분류, item.사고유형_중분류]); //obj로 못만드는 이유는 중복되는 것이 있어서
    //console.log('c1', c2);

    const [sel1, setSel1] = useState(0); //대분류 선택
    const [sel2, setSel2] = useState([]); //중분류 선택
    const [selData, setSelData] = useState({});

    useEffect(() => {
        console.log('Taccident sel1 useEffect []', sel1)
    }, [sel1]);

    useEffect(() => {
        console.log('Taccident sel2 useEffect', sel2)
        let temp = data.filter((item) => item.사고유형_대분류 === sel2[0] && item.사고유형_중분류 === sel2[1]);
        console.log(temp);
        setSelData(temp[0]);
    }, [sel2]);

    useEffect(() => {
        console.log('Taccident selData useEffect', selData)
        if(selData !== undefined) {
            const result = [selData.사고건수, selData.사망자수, selData.중상자수, selData.경상자수, selData.부상신고자수];
            console.log('result', result)
        }   
    }, [selData])

    useEffect(() => {
        console.log('Taccident sel1 useEffect', sel1)
        console.log('Taccident sel2 useEffect', sel2)
    }); 


     

    return (
        <main className="container">
            <article>
                <header>
                    <TaccidentNav1 c1 = {c1} sel1 = {sel1} setSel1 = {setSel1} />
                    <TaccidentNav2 c2 = {c2} sel1 = {sel1} sel2 = {sel2} setSel2 = {setSel2} />
                </header>
                {selData && <TaccidentDetail selData = {selData} />}
            </article>
        </main>
    );
}

export default Taccident;