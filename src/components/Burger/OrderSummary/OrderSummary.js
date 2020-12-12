import React from "react";

import Aux from "../../hoc/Aux";

const OrderSummary = (props) => {
 const ingredientSummary = Object.keys(props.ingredients).
 map((igkey) => {
   return (
     <li>
       <span>{igkey}</span>: {props.ingredients[igkey]}
     </li>
   );
 });

  return (
    <Aux>
       <h3>Your order</h3>
       <p>A delicious burger with the following ingredients</p>

    </Aux>
  );
};

export default OrderSummary;
