import React, {useState} from "react";



const handleChange = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
    console.log(member);
  };
const submitForm = event => {
    event.preventDefault();
    props.(note);
    // reset member
    setMember({
        name:"",
        email:"",
        role:""
    });
}
export function Form(props){
    const [member, setMember] = useState({
        name:"",
        email:"",
        role:""
    })
    return(
        <form action="" autoComplete="on" onSubmit="submitForm">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name"
            onChange={handleChange}/>

            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email"
            onChange={handleChange}/>

            <label htmlFor="role">Role</label>
            <input id="role" type="text" name="role"
            onChange={handleChange}/>
        </form>
    )
}