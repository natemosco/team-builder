import React from "react";

export function Team (props) {
    const members = props.team.map(person=>{
         return(
             <div>
                 <h1>{person.name}</h1>
                 <p>{person.email}</p>
                 <i>{person.role}</i>
             </div>
         )
     })
    return members 
}