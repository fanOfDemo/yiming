
import React, { Component } from "react";
import './App.css';
import WriteBlog from "./component/WriteBlog";
import BlogDetail from "./component/BlogDetail";
class App extends Component {

  constructor(prop) {
    super(prop);
    this.state = {
      value: "",
    };
  }
  handleChange = (value) => {
    console.log(value);
    this.setState({
      value: value,
    });
  };d
  render() {
    return (
      <div>
      <div>输入</div>
      <WriteBlog handleChange={this.handleChange}></WriteBlog>
      <div>输出</div>
      <BlogDetail content={this.state.value} />
    </div>
    );
  }
}

export default App;
