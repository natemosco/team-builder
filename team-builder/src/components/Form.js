import React, {useState} from "react";
import {FormStyle} from "./FormStyle";

export function Form(props){
    const handleChange = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
        console.log(member);
      };
    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
        // reset member
        setMember({
            name:"",
            email:"",
            role:""
        });
    }
    const [member, setMember] = useState({
        name:"",
        email:"",
        role:""
    })
    return(
        <FormStyle>
            <form action="" autoComplete="on" onSubmit={submitForm}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name"
                onChange={handleChange}/>

                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email"
                onChange={handleChange}/>

                <label htmlFor="role">Role</label>
                <input id="role" type="text" name="role"
                onChange={handleChange}/>
                <button type="submit">Add Team Member</button>
            </form>
        </FormStyle>
    )
}