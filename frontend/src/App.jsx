import { useState } from "react";
import SignUp from "./pages/SignUp";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SignUp />
    </>
  );
}

export default App;
