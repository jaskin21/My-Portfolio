import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Screen Pages
import Projects from "./components/screens/MiniProjects";
import About from "./components/screens/About";
import BlogPost from "./components/screens/BlogPost";
import NotFound from "./components/screens/notFound/NotFound";
import Resume from "./components/screens/pdfViewer/Resume";

class App extends Component {
  render() {
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
            <Projects />
          </Route>
          {/* <Route path="/mini-projects">
            <Projects />
          </Route> */}
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
