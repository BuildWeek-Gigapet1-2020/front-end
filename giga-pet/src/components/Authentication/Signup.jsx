import React from "react";

function Signup() {
  return (
    <form>
      <input name="parent-name" placeholder="Parent Name" type="text" />
      <input name="username" placeholder="Username" type="text" />
      <input name="email" placeholder="Email" type="text" />
      <input name="password" placeholder="Password" type="password" />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Signup;
