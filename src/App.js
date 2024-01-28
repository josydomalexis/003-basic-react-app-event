import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("josy")
  const [newName, setNewName] = useState(name)
  const handleChange = (e)=>{
    setNewName(e.target.value)
    console.log(newName)
  }
  const handleNewName = () =>{
    setName(newName)
    console.log("working")
  }
  return (
    <div className="App">
      <h1>{name}</h1>
      <input onChange={(e)=>handleChange(e)} name='newName' type='text' placeholder='name' value={newName}/>
      <button onClick={()=>handleNewName()}>Change name</button>
    </div>
  );
}

export default App;
