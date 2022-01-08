import { useState } from "react";

const Counter =()=>{
    const [count, setCount] = useState(0);
    const plus =()=>{
        setCount(count+1);
        console.log(count);    
    }
    const minus =()=>{
        if (count===0){
        }
        else{
            setCount(count-1);
        }
       
    }
    const reset =()=>{
        setCount(0);
    }
    return(
        <div className="counter">
            <h1>Count : {count}</h1>
            <button onClick={plus}>+</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={reset}>Reset</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={minus}>-</button>
        </div>
    );
}

export default Counter;