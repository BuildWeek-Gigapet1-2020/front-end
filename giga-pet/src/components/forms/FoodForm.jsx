import React from 'react';

function FoodForm() {
    return (
        <form>
           <input type="text" name="food-name" placeholder="Food Name" /> 

           <select name="food-type">
               <option value="fruit"></option>
               <option value="vegetable"></option>
               <option value="whole-grains"></option>
               <option value="meat"></option>
               <option value="dairy"></option>
               <option value="fats-oils"></option>
               <option value="treats"></option>
           </select>

           <button type="submit">Submit</button>
        </form>
    );
}

export default FoodForm;
