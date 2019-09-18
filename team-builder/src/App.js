import React, { useState} from 'react';
import {Team} from "./components/Team";
import {Form} from "./components/Form"

import './App.css';

function App() {
  const [team, setTeam]= useState([
    {name:"bob", email:"bob@gmail.com", role:"construction worker"},
    {name:"dan", email:"dan@gmail.com", role:"electrician"},
    {name:"gary", email:"gary@gmail.com", role:"salesman"}
  ])

  const addNewMember = member => {
    // const newMember = {
    //   id=name
    // }
    setTeam([...team, member]);
  }
  return (
   <main>
     <Team team={team}></Team>
     <Form addNewMember={addNewMember}></Form>
   </main>
  );
}

export default App;
