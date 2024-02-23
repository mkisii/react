import React, { useState, useEffect} from 'react'

function HookCounterOne() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  //  effect on when a condition is true
  useEffect(()=> {
    document.title = `You clicked ${count} times`
  }, [count])
  return (
    <div>
    <input type='text' value={name} onChange={e => setName(e.target.value)}/>
      <button  onClick={() => setCount(count + 1)}>Click {count}</button>
    </div>
  )
}

export default HookCounterOne