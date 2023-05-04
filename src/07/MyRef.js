import { useState, useRef, useEffect } from "react";

const MyRef = () => {
    const txtref = useRef();

    const itemArr = useRef([]);
    const [itemTag, setItemTag] = useState();

    useEffect(() => {
        txtref.current.focus()
    }, []);

    const addItem = (e) => {
        e.preventDefault();
        itemArr.current = [...itemArr.current, txtref.current.value]
        console.log("addItem", itemArr.current)
    };

    const resetItem = () => {
        console.log("resetItem")
    };

    return (
        <main className="container">
            <article>
                <header>
                    <form>
                        <div className="grid">
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
                <div className="grid">
                    {itemTag}
                </div>
            </article>
        </main>
    );
}

export default MyRef;