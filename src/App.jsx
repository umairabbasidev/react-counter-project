import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {



let [number,setNumber]= useState(0)

  const addValue = ()=>{
    setNumber(number+1)
  
  }

  const removeValue = ()=>{
    setNumber(number-1)
  }

  let [color,setColor] = useState('red')

  const handleChangeBackground = ()=>{
    const colors = ["gray","pink", "blue", "red", "yellow", "orange","green","brown"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
setColor(randomColor);
  }

  return (
    <div style={{backgroundColor: color,borderRadius:"1rem"}}>
    
    <h1>Chai Aur React  </h1>
    <h2>Counter Value:  {number}</h2>
<button onClick={addValue}>Add Value</button>
<button onClick={removeValue}>Remove Value</button>
<button onClick={handleChangeBackground}>Change Background</button>

    </div>
  )
}

export default App
