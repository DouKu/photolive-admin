import { Component } from 'react';

class Input extends Component {
  render () {
    const { placeholder } = this.props;
    return (
      <input placeholder={placeholder} className="pl-text"></input>
    )
  }
}

export default Input;