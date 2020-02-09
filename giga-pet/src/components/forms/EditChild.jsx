import React, { useState, useEffect } from "react";
import { updateChild } from "../../redux/actions/childActions";

import { useDispatch } from "react-redux";
import api from "../utils/api";

function EditChild(props) {
  console.log("EditChild props", props);
  // const child = useSelector(state => state.childReducer);
  const dispatch = useDispatch();
  // console.log("child", child.child);

  useEffect(() => {
    api()
      .get(`/api/child/${props.match.params.id}`)
      .then(res => {
        console.log("Edit child useEffect", res.data.child);
        setNewChild(res.data.child);
      });
  }, [props.match.params.id]);

  const [newChild, setNewChild] = useState({
    name: "",
    monster_id: 1
  });

  const handleChange = event => {
    setNewChild({ ...newChild, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(updateChild(newChild, props));
    // setNewChild({
    //   name: "",
    //   monster_id: 1
    // });
    // props.history.push(`/parent-profile`);
  };

  return (
    <div>
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
      <button onClick={() => props.history.push(`/parent-profile`)}>
        Back
      </button>
    </div>
  );
}

export default EditChild;
