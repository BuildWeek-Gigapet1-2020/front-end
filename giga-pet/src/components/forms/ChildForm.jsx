import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { newChild } from "../../redux/actions/childActions";

function ChildForm(props) {
  const dispatch = useDispatch();

  const [child, setChild] = useState({
    name: "",
    monster_id: 1
  });

  const handleChange = event => {
    setChild({ ...child, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(newChild(child, props));
  };

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
        <option value="1" label="Orange Monster" />
        <option value="2" label="Red Monster" />
        <option value="3" label="Green Monster" />
        <option value="4" label="Purple Monster" />
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ChildForm;
