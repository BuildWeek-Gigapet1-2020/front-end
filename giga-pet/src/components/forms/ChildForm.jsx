import React from "react";

function ChildForm() {
  // add useState

  //   useEffect(() => {
  //     api()
  //       .get("/api/child/")
  //       .then()
  //       .catch();
  //   }, []);

  // create onChange for form below

  // create onSubmit for form below

  // add form validation
  //    - for child name make sure the text typed in is a string and not a number

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
