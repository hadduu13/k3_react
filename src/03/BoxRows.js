import Box from "./Box.css";
import { useState } from "react";

const BoxRows = ({mv}) => {
    //const mvlist = [...probs.mv];
    const[lineTag, setLineTag] = useState('');
    //클릭된 자료 확인
    const showMv = (row)=>{
        console.log(row);
        let tempTag = `[${row.movieCd}] ${row.movieNm}, Released
         Date : ${row.openDt}`
        //백틱(``)은 여러개의 문자열을 한 번에 넣어줄 수 있다
        setLineTag(tempTag);
    }
    let trTags = [];
    for (let row of mv) {
        console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten);
        let icon;
        let intent = parseInt(row.rankInten);
        if (intent === 0) icon = '-';
        else if (intent < 0) icon = '🔽';
        else icon = '🔼';

        trTags.push(
            <tr className="mytr" key={row.movieCd} onClick={()=>showMv(row)}>
                <td>{row.rank}</td>
                <td>{row.movieNm}</td>
                <td><span  id="a1">{parseInt(row.salesAmt).toLocaleString() + '원'}</span></td>
                <td>{icon}{intent == 0? '': Math.abs(intent)}</td>
            </tr>
        );
    }



    return (
        <>
           <tbody id="b1">
                {trTags}
           </tbody>

           <tfoot>
            <tr id="b3">
                <td colSpan='4'>{lineTag}</td>
            </tr>
           </tfoot>
        </>
    );
}

export default BoxRows;