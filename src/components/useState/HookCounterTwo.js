import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    const incrementCounterFive = () => {
        for(let i =0; i<5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div >
            <div className='flex justify-between p-4 m-auto items-center'>
                Count: {count}
                <button className='m-5' onClick={() => setCount(initialCount)}>Reset </button>
                <button className='m-5' onClick={() => setCount(prevCount => prevCount + 1)}> Increment </button>
                <button className='m-5' onClick={() => setCount(prevCount => prevCount - 1)}> Decrement</button>
                <button className='m-5' onClick={incrementCounterFive}> Increment 5</button>
            </div>

        </div>
    )
}

export default HookCounterTwo