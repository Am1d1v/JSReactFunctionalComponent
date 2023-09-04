import { useEffect, useRef, useState } from "react";



const WithRef = () => {

    const inputEl1 = useRef(null);
    console.log(inputEl1);
    const numRef = useRef(0);


    useEffect(() => {
        console.log('Mounted');
    }, [])

    return(
        <div>
            <input placeholder="name" ref={inputEl1} />
            <button>{numRef.current}</button>
        </div>
    )
}

export default WithRef;