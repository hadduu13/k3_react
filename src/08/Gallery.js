import style from '../08/Gallery.module.css';
import GalleryView from '../08/GalleryView';
import { useState, useEffect, useRef } from 'react';

/*https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=RMZOE5nxYetqyMQfyEMjbhv0YOxMX7mj%2B8ucPjopU%2FTHy%2BF2x3UjmB9kqdqtEqvO8mYBMx04W3%2BTmxwNF0sJmw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ec%9e%90%ea%b0%88%ec%b9%98&_type=json
*/

const Gallery = () => {
    //keyword input
    const txt1 = useRef();

    //컴포넌트가 처음 랜더링되면
    useEffect(() => {
        txt1.current.focus();
    }, [])

    //확인버튼
    const show = (e) => {
        e.preventDefault();
        if(txt1.current.value === '') return;

        let kw = encodeURI(txt1.current.value);
        //console.log(txt1.current.value, kw);
        getDt(kw) ;
        
    }

    const[bodyTag, setBodyTag] = useState('');


    //취소버튼
    const showClear = (e) => {
        e.preventDefault();
    }

    const getDt = (kw) => {
        getData(kw);
    }

    const getData = (kw) => {
        let url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=h0WL8MWOxa3V5FBI6ruDf7S86fBQ41PsPMNjXFFrocUybm7aY4op60lnhdZd5z7pQ92ejqVYTlaTm2EtRVGuGw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword='
        url = url + kw + '&_type=json';

        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            let array = data.response.body.items.item;
            console.log("array = ", data.response.body.items.item)

           
            setBodyTag(
                array.map((item) => {
                    let tags = item.galSearchKeyword;
                    console.log("tags = ", tags);
                    let tagArr= tags.split(',');
                    console.log("tagArr = ", tagArr);
                    
                    return(
                        <main className='container'>
                            <article>
                                <header>
                                    <h2>{item.galTitle}</h2>
                                    <span>{item.galPhotographyLocation}</span>
                                </header>
                                <div>
                                    <img src={item.galWebImageUrl}></img>
                                </div>
                                <div>
                                    {tagArr.map((item) => {
                                        return(
                                        <span className={style.tag}>{item}</span>
                                        )
                                    })}
                                </div>
                            </article>
                        </main>
                    )
                })
            )
        })
        .catch((err) => console.log(err))

        console.log(url)
    }




    return (
        <main className="container">
            <article>
                <header>
                    <h1>한국관광공사 관광사진 정보</h1>
                </header>
                <div className="grid">
                    <input ref={txt1} type ='text' name = "txt1" className={style.text} placeholder="키워드를 입력하세요." required/>
                    <div className={style.btDiv}>
                        <button className={style.a1} onClick={(e) => show(e)}>확인</button>
                        <button className={style.a2} onClick={(e) => showClear(e)}>취소</button>
                    </div>
                </div>
                <div>
                    {bodyTag}
                </div>
            </article>
        </main>
    );
}

export default Gallery;