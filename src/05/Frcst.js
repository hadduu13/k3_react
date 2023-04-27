import data from './dataFrcst.json'

const Frcst = () => {
    
    //날짜정보 순서대로 정렬
    const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];

    dtKey.map((item)=>console.log(data[item]))
    console.log(data);
    return (
        <>
        </>
    )
}

export default Frcst;