import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Article from "../pages/Article";
import Home from "../pages/Home";
import About from "../pages/About"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/article/:id" component={Article} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
