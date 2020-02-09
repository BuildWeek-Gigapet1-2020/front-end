import React, { useState, useEffect } from "react";
import { loadChild, updateChild } from "../../redux/actions/childActions";

import { useSelector, useDispatch } from "react-redux";

function EditChild(props) {
  console.log("EditChild props", props);
  const child = useSelector(state => state.childReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadChild(props));
  }, [dispatch]);

  const [newChild, setNewChild] = useState({
    name: props.location.state.name,
    monster_id: props.location.state.monster_id
  });

  const handleChange = event => {
    setNewChild({ ...newChild, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(updateChild(newChild, props));
    props.history.push(`parent-profile`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Child Name"
        type="text"
        value={newChild.name}
        onChange={handleChange}
      />
      <select
        name="monster_id"
        value={newChild.monster_id}
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

export default EditChild;
