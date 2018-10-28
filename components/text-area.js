import { Component } from 'react';
import { autobind } from 'core-decorators';

@autobind
class TextArea extends Component {
  render () {
    const { placeholder, value } = this.props;
    return (
      <textarea value={value} 
        onChange={this.onChange} 
        placeholder={placeholder} 
        className="pl-text pl-text-area">
      </textarea>
    )
  }
  onChange (event) {
    this.props.onChange && this.props.onChange(event.target.value);
  }
}

export default TextArea;