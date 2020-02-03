import React, { useState } from "react";
import api from "../utils/api";

function ChildForm() {
  const [child, setChild] = useState({
    name: "",
    monster_id: 1
  })

  const handleChange = event => {
    setChild({ ...child, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault();
    api()
        .post("/api/child", child)
        .then( res => (console.log(res.data)) )
        .catch(error => console.log("Error", error));
  }
  
  // create onChange for form below

  // create onSubmit for form below

  // add form validation
  //    - for child name make sure the text typed in is a string and not a number

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Child Name" type="text" value={child.name} onChange={handleChange}/>
      <select value={child.monster_id} onChange={handleChange}>
        <option value={`${1}`}>Orange Monster</option>
        <option value={`${2}`}>Red Monster</option>
        <option value={`${3}`}>Green Monster</option>
        <option value={`${4}`}>Purple Monster</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ChildForm;
