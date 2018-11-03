import { Component } from 'react';
import Input from './input';

class LabelInput extends Component {
  render () {
    const { value, placeholder, onChange, onClick } = this.props;
    return (
      <div className="label-container">
        <Input value={value} placeholder={placeholder} onChange={onChange}></Input>
        <i className="check-icon" onClick={onClick}></i>
      </div>
    )
  }
}

export default LabelInput;