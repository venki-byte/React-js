import {useEffect, useState} from 'react'
import "./Advice.css";

export const AdviceApp = () => {
    const [advice,setAdvice] = useState("Please Click Button To Get Advice");
    const [count,setCount] = useState(0);
    async function getAdvice() {
        const res = await fetch ("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data.slip.advice);
        setCount((c) => c + 1)
    }

    useEffect(function(){
        getAdvice()
    },[]);
    
    return (
    <div>
        <h3>{advice}</h3>
        <button onClick={getAdvice}>Get Advice</button>
        <p>
            you have read <b>{count}</b> pieces of advice
        </p>
    </div>
  )
}
