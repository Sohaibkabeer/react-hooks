import logo from './logo.svg';
import {useState,useEffect} from 'react';
import './App.css';
import Navbar from './component/Navbar';



function App() {

  // useState example
  const [color, setColor] = useState("Red")
  const [message, setMessage] = useState("I am using a useState and its value is")
  const [name, setName] = useState("Learn React");
  const updateStates = () => {
    message === "I am using a useState and its value is" ? setMessage("Button pressed and the state has been ") : setMessage("I am using a useState and its value is");
    name === "Learn React" ? setName("Updated!!") : setName("Learn React");
    setColor("Yellow")
  };
//

// useEffect example

useEffect(() => {
  alert("Run on each render!"); // will work on every render
})

useEffect(() => {
  alert("welcome!"); // basic effect will work on mount , runs 1 time at the time of app load
}, [])


useEffect(() => {
  alert("name state changed to "+ name); // every time "name" state is changed it will be triggered. even at the start bcuz of init
}, [name])


  return (
    <>
    <Navbar color={color}/>
    <div className="App">
      <h1>{message} {name}</h1>
    <button onClick={()=>{updateStates()}}>Click me!</button>
    </div>
    </>
  );
}

export default App;
