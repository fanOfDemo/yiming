import React from 'react'
import Editor from 'for-editor'

class WriteBlog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      editorValue: "",
      imageUrl: "",
    };
  }
  handleChange(value) {
     if (this.props.handleChange) {
       console.log("write:" + value);
       this.props.handleChange(value);
     }

    this.setState({
      editorValue: value,
    });
   
    
  }
  render() {
    return (
      <Editor
        className="my-editor"
        subfield={true}
        preview={true}
        // addImg = {(file) => this.uploadHandler(file)}
        value={this.state.editorValue}
        onChange={(value) => this.handleChange(value)}
      />
    );
  }
}
export default WriteBlog;