import React from "react";

// function Greeter(props) {
//   return (
//     <>
//       <h1>Hi there, {props.name}</h1>
//       <p>You are {props.age} years old</p>
//     </>
//   );
// }

//Another way other than props
function Greeter({ name, excitement = 1, age = 31 }) {
  const greet = () => {
    alert(`HELLO THERE, ${name} `);
  };
  return (
    <>
      <h1>
        Hi there, {name}
        {"!".repeat(excitement)}
      </h1>
      <p>You are {age} years old</p>
      {/* <button onClick={() => alert("HELLO!")}>Click Me</button> */}
      <button onClick={greet}>Click Me</button>
      {/* <button onMouseOver={greet}>Click Me</button> */}
    </>
  );
}

export default Greeter;
