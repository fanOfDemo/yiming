/*
 * @Description:
 * @Author: wengyiming
 * @Date: 2020-05-07 11:05:41
 */
import React from "react";
const ReactMarkdown = require("react-markdown/with-html");
const input = "# This is a header\n\nAnd this is a paragraph";
class HelloTypeScript extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {}
  render() {
    return (
      <div>
        <div>这个是TypeScript构建的组件</div>
        <p />
        <br />

        <ReactMarkdown source={input} escapeHtml={false}></ReactMarkdown>
      </div>
    );
  }
}
export default HelloTypeScript;
