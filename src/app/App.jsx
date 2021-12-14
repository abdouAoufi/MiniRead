import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Article from "../pages/Article";
import Home from "../pages/Home";
import About from "../pages/About";
import PreviewArticle from "../pages/PreviewArticle";
import CreateArticle from "../pages/CreateArticle";
import { CategoryProvider } from "../context/category";
import Quiz from "../pages/Quiz";
import { PreviewContextProvider } from "../context/articlePreview";
import { ContextProvider } from "../context/context";

function App() {
  return (
    <ContextProvider>
      <CategoryProvider>
        <PreviewContextProvider>
          <Router>
            <Switch>
              <Route path="/preview" component={PreviewArticle} />
              <Route path="/article/:id" component={Article} />
              <Route path="/create-article" component={CreateArticle} />
              <Route path="/about" component={About} />
              <Route path="/quiz" component={Quiz} />
              <Route path="/" component={Home} />
            </Switch>
          </Router>
        </PreviewContextProvider>
      </CategoryProvider>
    </ContextProvider>
  );
}

export default App;
