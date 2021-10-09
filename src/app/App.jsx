import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Article from "../pages/Article";
import Home from "../pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/article" component={Article} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
