import React, { useState } from "react";
import Header from "../components/Header/header";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <Header count={count} />
      </div>
    </Router>
  );
}

export default App;
