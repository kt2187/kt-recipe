import React from "react";

const Button = (props) => {
  return (
    <button className="btn waves-effect waves-light" type="submit" name="action" {...props}>{props.children}</button>
  );
}

export default Button;