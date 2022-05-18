import React from "react";

export default function PropsDemo(props) {
  return (
    <div>
      <h1>Hello Dear {props.name}</h1>
      <h2>Email us at {props.email}</h2>
      <h2>Body, if defined {props.children}</h2>

    </div>
  );
}
