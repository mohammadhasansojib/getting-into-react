import { useState, useEffect } from "react";

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    
    useEffect(() => {
        console.log("useEffect!!");
    }, [count])

    return (
        <div style={{
            border: "2px solid gray",
            padding: "1rem",
            margin: "1.5px 0"
        }}>
            {console.log("Render")}
            <h1>{count}</h1>
            <button onClick={() => setCount(count+1)}>+</button>
            <h1>{count2}</h1>
            <button onClick={() => setCount2(count2-1)}>-</button>
        </div>
    )
}

export default UseEffect;