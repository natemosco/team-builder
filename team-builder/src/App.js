import React, { useState} from 'react';
import {Team} from "./components/Team";
import {Form} from "./components/Form"

import './App.css';
import styled from "styled-components";


const StyledMain = styled.main`
  width:100%;
  height:auto;
  min-height:100vh;
  display: flex;
  .left-main{
    display:flex;
    justify-content: center;
    align-items: center;
    width:40%;
    background: "https://source.unsplash.com/random" no-repeat cover/100%;
  }
  .right-main{
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
  }
`;

function App() {
  const [team, setTeam]= useState([
    {id:1, name:"bob", email:"bob@gmail.com", role:"construction worker"},
    {id:2, name:"dan", email:"dan@gmail.com", role:"electrician"},
    {id:3, name:"gary", email:"gary@gmail.com", role:"salesman"}
  ])

  const addNewMember = member => {
    const newMember = {
      id:Date.now(),
          ...member
    }
    setTeam([...team, newMember]);
  }
  console.log(team);
  return (
    <StyledMain>
     <section className="left-main">
     <Form addNewMember={addNewMember}></Form>
     </section>
     <section className="right-main">
     <Team team={team}></Team>
     </section>
    </StyledMain>
  );
}

export default App;
