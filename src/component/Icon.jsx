import React, { useContext } from "react";
import { counterContext } from "../context/context";

const Icon = () => {
    // this count is coming from App.js by using useContext rather than prop-drilling
  const count = useContext(counterContext);
  return <div>{count}</div>;
};

export default Icon;
