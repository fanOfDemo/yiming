/*
 * @Description:
 * @Author: wengyiming
 * @Date: 2020-01-06 13:46:48
 */
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About }
];

class App extends Component {
  render() {
    return (
      <BrowserRouter>
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
                ""
              )
          )}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
