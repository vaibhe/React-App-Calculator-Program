import React, { useState } from "react";
import  "../Calculator.css";

const Calculator = () => {
  const [display, setDisplay] = useState("");
  
  const handleClick = (value) => {
    if (value === "C") {
      setDisplay(""); // Clear the display
    } else if (value === "=") {
      try {
        setDisplay(eval(display).toString()); // Evaluate the expression
      } catch {
        setDisplay("Error"); // Handle invalid expressions
      }
    } else {
         setDisplay(display + value); // Append value to the display
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <div className="calculator">
      <div className="display">{display || "0"}</div>
      <div className="buttons">
        {buttons.map((btn, index) => (
          <button key={index} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
