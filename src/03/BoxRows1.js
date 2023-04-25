import Box from "./Box.css";
import { useState } from "react";

const BoxRows = ({ mv }) => {
    //const mvlist = [...probs.mv];

    const [footTag, setFootTag] = useState('');
    const showMv = (row) => {
        console.log(row);
        setFootTag(row.movieCd);
    }

    let trTags = [];
    for (let row of mv) {
        console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten);
        let icon;
        let intent = parseInt(row.rankInten);
        if (intent === 0) icon = '⏺';
        else if (intent < 0) icon = '🔽';
        else icon = '🔼';
        trTags.push(
            <tr className="mytr" key={row.movieCd} onClick={() => showMv(row)}>
                <td>{row.rank}</td>
                <td>{row.movieNm}</td>
                <td><span  id="a1">{parseInt(row.salesAmt).toLocaleString() + '원'}</span></td>
                <td>{icon}{intent == 0? '': Math.abs(intent)}</td>
            </tr>
        );
    }



    return (
        <>
            <tbody>
              {trTags}
            </tbody>
            <tfoot>
                <tr>
                <td colSpan={4}>{footTag}</td>
                </tr>
            </tfoot>
           
        </>
    );
}

export default BoxRows;