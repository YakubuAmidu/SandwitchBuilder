import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from '../../../hoc/Aux';

const SideDrawer = (props) => {
  // ..
  return(
    <Aux>
    <Backdrop show/>
    <div className="SideDrawer">
    <div className="Logo">
     <Logo/>
     </div>
     <nav>
      <NavigationItems />
     </nav>
    </div>
    </Aux>
  )
}

export default SideDrawer;
