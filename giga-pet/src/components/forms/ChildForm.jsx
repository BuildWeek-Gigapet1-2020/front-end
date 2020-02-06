import React, { useState } from "react";
import api from "../utils/api";

import { connect } from "react-redux";
import { newChild } from "../../redux/actions/childActions";

function ChildForm(props) {
  console.log("ChildForm props", props);
  const [child, setChild] = useState({
    name: "",
    monster_id: 1
  });

  const handleChange = event => {
    setChild({ ...child, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.newChild(child, props);

    // if (child.name.length <= 1) {
    //   alert("Name is too short");
    // } else {
    //   api()
    //     .post("/api/child", child)
    //     .then(res => {
    //       console.log(res.data);
    //       props.history.push("/parent-profile");
    //     })
    //     .catch(error => console.log("Error", error));
    // }
  };

  // create onChange for form below

  // create onSubmit for form below

  // add form validation
  //    - for child name make sure the text typed in is a string and not a number

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Child Name"
        type="text"
        value={child.name}
        onChange={handleChange}
      />
      <select
        name="monster_id"
        value={child.monster_id}
        onChange={handleChange}
      >
        {/* <option value={orangeMonster}>Orange Monster</option>
        <option value={redMonster}>Red Monster</option>
        <option value={greenMonster}>Green Monster</option>
        <option value={purpleMonster}>Purple Monster</option> */}
        <option value="1" label="Orange Monster" />
        <option value="2" label="Red Monster" />
        <option value="3" label="Green Monster" />
        <option value="4" label="Purple Monster" />
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

function mapStateToProps(state) {
  console.log("newChild state", state);
  return console.log("{formData: state.childReducer}", {
    formData: state.childReducer
  });
}

export default connect(mapStateToProps, { newChild })(ChildForm);
