import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Article from "../pages/Article/Article";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Article} />
      </Switch>
    </Router>
  );
}

export default App;
