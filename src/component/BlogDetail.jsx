import React from 'react'
import ReactMarkdown from "react-markdown";

import "markdown-navbar/dist/navbar.css";

class BlogDetail extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props.content);
  }

  componentDidMount(){
      const { con } = this.props.content;
    console.log(con);
  }

  render(){
    
    return <ReactMarkdown source={this.props.content} />;
  }
}
export default BlogDetail;