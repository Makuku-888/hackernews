import React from "react";
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
 
const AwesomeComponent = (props) => {
  
    console.log(props.loading)
    return (
      <div className="sweet-loading">
        <RingLoader css={override} size={30} color={"#123abc"} loading={props.loading}
        />
      </div>
    );
  
}

export default AwesomeComponent;