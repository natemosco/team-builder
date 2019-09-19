import React from "react";
import styled from "styled-components";

const TeamMemberDiv = styled.div`
    width:200px;
    height:200px;
    background-color: MAROON;
    display:flex;
    flex-direction:column;
    justify-content:center;
    div{
        background-color: #fff6;
        h1{
            font-family: sans-serif;
            padding 5px;
            font-size: 20px;        
        }
    }
`;

export function Team (props) {
    const members = props.team.map(person=>{
         return(
            <TeamMemberDiv>
             
                 <div>
                 <h1>{person.name}</h1>
                 </div>
                 <p>{person.email}</p>
                 <i>{person.role}</i>
             
            </TeamMemberDiv> 
         )
     })
    return members 
}