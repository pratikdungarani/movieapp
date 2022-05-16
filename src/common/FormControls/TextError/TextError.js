import React from "react";

function TextError(props) {
  return (
    <div className="error" style={{ color: "#ff0000" }}>
      {props.children}
    </div>
  );
}

export default TextError;
