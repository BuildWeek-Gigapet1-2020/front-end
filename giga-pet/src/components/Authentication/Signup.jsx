import React from "react";

function Signup() {
  return (
    <form>
      <input name="parent-name" placeholder="Parent Name" type="text" />
      <input name="username" placeholder="Username" type="text" />
      <input name="email" placeholder="Email" type="text" />
      <input name="password" placeholder="Password" type="password" />
      <input name="child-name" placeholder="Child Name" type="text" />
      <select>
        <option value="monster-orange">Orange Monster</option>
        <option value="monster-red">Red Monster</option>
        <option value="monster-green">Green Monster</option>
        <option value="monster-purple">Purple Monster</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Signup;
