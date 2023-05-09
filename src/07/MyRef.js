import { useState, useRef, useEffect } from "react";
import style from '../07/MyRef.module.css';

const MyRef = () => {
    const txtref = useRef();

    const itemArr = useRef([]);
    const [itemTag, setItemTag] = useState();

    useEffect(() => {
        txtref.current.focus()
    }, []);

    const addItem = (e) => {
        e.preventDefault();
        itemArr.current = [...itemArr.current, txtref.current.value];
        let set = new Set(itemArr.current);
        itemArr.current = [...set];

        let tempTag = itemArr.current.map((item, idx) => <span key={'sp'+idx} className={style.sp}>{item}</span>);
        setItemTag(tempTag);
        console.log("addItem=", itemArr.current)
    };

    const resetItem =() => {
        txtref.current.value = '';
        txtref.current.focus();
        console.log("restItem");
    }


    return (
        <main className="container">
            <article>
                <header>
                    <form>
                        <div>
                            <div>
                                <label htmlFor="txt1">과일/채소 입력</label>
                                <input ref={txtref} type="text" id="txt1" name="txt1" required />
                                </div>
                            <div>
                                <button onClick={(e) => addItem(e)}>등록</button>
                                <button onClick={() => resetItem()}>취소</button>
                            </div>
                        </div>
                    </form>
                </header>
                <div>
                    {itemTag}
                </div>
            </article>
        </main>
    );
}

export default MyRef;