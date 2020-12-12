import React from "react";

import Aux from "../../../hoc/Aux";

const OrderSummary = (props) => {
 const ingredientSummary = Object.keys(props.ingredients)
 .map((igkey) => {
   return (
     <li key={igkey}>
       <span
       style={{ textTransform: "capitalize" }}>
       {igkey}</span>: {props.ingredients[igkey]}
     </li>
   );
 });

  return (
    <Aux>
       <h3>Your order</h3>
       <p>A delicious burger with the following ingredients</p>
      <ul>
        {ingredientSummary}
        <p>Continue to checkout</p>
      </ul>
    </Aux>
  );
};

export default OrderSummary;
