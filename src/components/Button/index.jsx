import React, { forwardRef } from "react";

const Button = forwardRef(function Button(props, ref) {
  const { text, onClick } = props;

  return <button onClick={onClick}>{text}</button>;
});

export default Button;
