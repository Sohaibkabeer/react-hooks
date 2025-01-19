import { useEffect } from "react";
import React from "react";

const Navbar = ({ color,countRef }) => {
  // useEffect example
  useEffect(() => {
    alert("Color was changed"); // every time color is changed this will run
  }, [color]);

  return (
    <div>
      <h1>The color of the navbar is {color}</h1>
      <h2>Count : {countRef}</h2>
    </div>
  );
};

export default Navbar;
