import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/screens/MiniProjects";
import About from "./components/screens/About";
import BlogPost from "./components/screens/BlogPost";
import NotFound from "./components/screens/notFound/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/blog-post">
          <BlogPost />
        </Route>
        <Route path="/mini-projects">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
