/*
 * @Description:
 * @Author: wengyiming
 * @Date: 2020-01-06 13:46:48
 */
import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import HelloTypeScript from "./pages/HelloTypeScript.tsx";

import "./App.css";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/ty", component: HelloTypeScript },
];

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          {routes.map((page, index) =>
            page.component ? (
              <Route
                key={index}
                exact
                path={page.path}
                component={page.component}
              />
            ) : (
                "test"
              )
          )}
        </div>
      </HashRouter>
    );
  }
}

export default App;
