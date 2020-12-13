import React from "react";

import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

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
      </ul>
      <p>Continue to checkout</p>
      <Button>CANCEL</Button>
      <Button>CONTINUE</Button>
    </Aux>
  );
};

export default OrderSummary;
