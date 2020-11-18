import React from "react";
import Greeter from "./Greeter";
import Navbar from "./Navbar";
import Counter from "./Counter";
// import logo from "./logo.svg";
import MoodToggler from "./MoodToggler";
import Cart from "./Cart";
import "./App.css";

const items = [
  { id: 1, name: "Taco Seasoning", price: 2.25, qty: 2 },
  { id: 2, name: "Taco Beans", price: 1.99, qty: 3 },
  { id: 3, name: "Sour Cream", price: 3.5, qty: 1 },
];

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <h1>Hello from App!</h1>
      <Cart initialItems={items} />
      <Counter step={5} />
      <Counter />
      <MoodToggler />

      <Navbar />
      <Greeter name="Hazelle" age="27" excitement={2} />
      <Greeter name="Mael" excitement={4} />
    </div>
  );
}

export default App;
