import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import ToDo from "./components/ToDo";
import AuthStatus from "./components/AuthStatus";

function App() {
  return (
    <>
      <div>
        <h1>React Testing Playground</h1>

        <h2>Counter</h2>
        <Counter />

        <h2>ToDo</h2>
        <ToDo label="Buy eggs" />

        <h2>Auth</h2>
        <AuthStatus />
      </div>
    </>
  );
}

export default App;
