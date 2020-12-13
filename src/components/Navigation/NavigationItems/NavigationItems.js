import React from "react";

import './NavigationItems.css';
import NavigationItem from "./NavigationItem";

const NavigationItems = () => {
  return(
    <ul className="NavigationItems">
      <NavigationItem>Burger Builder</NavigationItem>
      <NavigationItem>Checkout</NavigationItem>
    </ul>
  )
}

export default NavigationItems;
