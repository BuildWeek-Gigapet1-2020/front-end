import React from "react";

function ChildForm() {
  return (
    <div>
      <input name="child-name" placeholder="Child Name" type="text" />
      <select>
        <option value="monster-orange">Orange Monster</option>
        <option value="monster-red">Red Monster</option>
        <option value="monster-green">Green Monster</option>
        <option value="monster-purple">Purple Monster</option>
      </select>

      <button type="submit">Submit</button>
    </div>
  );
}

export default ChildForm;
