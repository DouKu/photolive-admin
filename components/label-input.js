import { Component } from 'react';
import Input from './input';

class LabelInput extends Component {
  render () {
    const { placeholder, onChange, onClick } = this.props;
    return (
      <div className="label-container">
        <Input placeholder={placeholder} onChange={onChange}></Input>
        <i className="check-icon" onClick={onClick}></i>
      </div>
    )
  }
}

export default LabelInput;