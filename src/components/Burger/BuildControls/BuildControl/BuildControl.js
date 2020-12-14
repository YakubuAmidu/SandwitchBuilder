import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button
            className={classes.Less}
            onClick={props.removed}
            disabled={props.disabled}>Less</button>
        <button
            className={classes.More}
            onClick={props.added}>More</button>
    </div>
);

export default buildControl;






// import React from "react";
//
// import "./BuildControl.css";
//
// const BuildControl = (props) => {
//   return (
//     <div className="BuildControl">
//     <div className="Label">{props.label}</div>
//     <button className="Less"
//     onClick={props.removed}
//     disabled={props.disabled}>Less</button>
//     <button className="More"
//     onClick={props.added}>More</button>
//     </div>
//   )
// }
//
// export default BuildControl;
