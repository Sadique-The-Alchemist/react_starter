import React from "react";
import "./styles.css";
import Card from "./Card";
import Names from "./Data";

export default function App() {
  return (
    <div className="App">
      {Names.map(n => (
        <Card {...n} />
      ))}
    </div>
  );
}
