import { Component } from 'react';
import Input from './input';

class LabelInput extends Component {
  render () {
    return (
      <div className="label-container">
        <Input {...this.props}></Input>
        <i className="check-icon"></i>
      </div>
    )
  }
}

export default LabelInput;