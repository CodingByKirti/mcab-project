import React from "react";

export default function PropsDemo({ name, email, children }) {
  return (
    <div>
      <h1>Hello Dear {name}</h1>
      <h2>Email us at {email}</h2>
      <h2>Body, if defined {children}</h2>
    </div>
  );
}
