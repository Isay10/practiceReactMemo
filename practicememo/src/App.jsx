import React, { useState, useEffect } from 'react';
import List from "./List";
import Item  from "./Item";
const initialUsers = [
  {id: 1, name: "Patricio"},
  {id: 2, name: "Murilo"}
];

function App() {

  const [users, setUsers] = useState(initialUsers);
  const [text, setText] = useState("New");

  const handleAdd = () => {
    const newUser = {id: Date.now(), name: text}
    setUsers([...users, newUser])
  };


  useEffect(()=>{
    console.log("App Render")
  })

  return (
    <div className="App">
      <input type="text" name="" id="" value={text} onChange={(e)=>setText(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <List users={users}/>
    </div>
  );
}

export default App;
