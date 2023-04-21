import Box from "./Box.css";

const BoxRows = ({ mv }) => {
    //const mvlist = [...probs.mv];

    let trTags = [];
    for (let row of mv) {
        console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten);
        let icon;
        let intent = parseInt(row.rankInten);
        if (intent === 0) icon = '⏺';
        else if (intent < 0) icon = '🔽';
        else icon = '🔼';
        trTags.push(
            <tr className="mytr" key={row.movieCd}>
                <td>{row.rank}</td>
                <td>{row.movieNm}</td>
                <td><span  id="a1">{parseInt(row.salesAmt).toLocaleString() + '원'}</span></td>
                <td>{icon}{intent == 0? '': Math.abs(intent)}</td>
            </tr>
        );
    }



    return (
        <>
            {trTags}
        </>
    );
}

export default BoxRows;