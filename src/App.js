import {useState,useEffect, useRef, useMemo} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { counterContext } from './context/context';

//useMemo example

const nums = new Array(30_000_000).fill(0).map((_,i)=>{
  return{
    index:i,
    isMagical: i===29_000_000
  }
})

function App() {

  // useState example
  const [color, setColor] = useState("Red")
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("I am using a useState and its value is")
  const [name, setName] = useState("Learn React");
  const updateStates = () => {
    message === "I am using a useState and its value is" ? setMessage("Button pressed and the state has been ") : setMessage("I am using a useState and its value is");
    name === "Learn React" ? setName("Updated!!") : setName("Learn React");
    setColor("Yellow")
    countRef.current = countRef.current +1;
  };
//

// useEffect example

// useEffect(() => {
//   alert("Run on each render!"); // will work on every render
// })

// useEffect(() => {
//   alert("welcome!"); // basic effect will work on mount , runs 1 time at the time of app load
//   btnRef.current.style.backgroundColor = "red"
// }, [])


// useEffect(() => {
//   alert("name state changed to "+ name); // every time "name" state is changed it will be triggered. even at the start bcuz of init
// }, [name])

// useRef example
const countRef = useRef(0)
const btnRef = useRef(0)  // we use useRef because across re-renders the value can persist, where as a state or local variable will change.

//useMemo example

const [number, setNumber] = useState(nums)
//  const magical = number.find(item=>item.isMagical===true) // expensive computation
const magical = useMemo(()=> number.find(item=>item.isMagical===true),[number])  // we use useMemo to make sure such expensive computations dont happen at every re-render. But if we want to recall this function we can pass a value to its dependency array at which update it will called again 



// useContext example
//whatever is wrapped inside " <counterContext.Provider> " will have access to its value and can be used in any component without the need of prop drilling
  return (
    <>
    <counterContext.Provider value={count}> 
    <Navbar color={color} countRef={countRef.current}/>
    <div className="App">
      <h1>{message} {name}</h1>
    <button onClick={()=>{updateStates()}}>Click me!</button>
    <button ref={btnRef} onClick={()=>{setCount(count+1)}}>count is {count}</button>
    </div>
    </counterContext.Provider>
    </>
  );
}

export default App;
