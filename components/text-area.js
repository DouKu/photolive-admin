import { Component } from 'react';

class TextArea extends Component {
  render () {
    const { placeholder } = this.props;
    return (
      <textarea placeholder={placeholder} className="pl-text pl-text-area"></textarea>
    )
  }
}

export default TextArea;