import React from "react";

function Button(props) {
  const { disabled, onClick, text } = props;

  return (
    <button disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
