import {useState} from 'react';
import Counter from './Counter';
const Message =()=>{
    const [state, setState] = useState(false);
    return(
        <div>
            {state ? <Counter /> : null}
            <br />
            <button id='a' onClick={()=>{
                setState(!state);
                state ? document.getElementById('a').innerText="Show Counter" : document.getElementById('a').innerText="Hide Counter";
            }}>
               Show Counter
            </button>
        </div>
    )
}

export default Message;