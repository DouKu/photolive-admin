import { Component } from 'react';
import { autobind } from 'core-decorators';

@autobind
class ButtonFile extends Component {
  render () {
    const { children, style, onClick } = this.props;
    return (
      <button onClick={onClick}
        style={style}
        className="pl-button">
        {children}
        <input onChange={this.handleFileChange} 
          className="pl-button-file" 
          type="file">
        </input>
      </button>
    )
  }
  handleFileChange (event) {
    const { onChange } = this.props;
    const files = event.target.files
    if (files && files[0]) {
      onChange(files[0], event);
    }
  }
}

export default ButtonFile;
