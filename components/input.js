import { Component } from 'react';
import { autobind } from 'core-decorators';

@autobind
class Input extends Component {
  render () {
    const { placeholder, value } = this.props;
    return (
      <input value={value}
        onChange={this.onChange}
        placeholder={placeholder}
        className="pl-text">
      </input>
    )
  }
  onChange (event) {
    this.props.onChange && this.props.onChange(event.target.value);
  }
}

export default Input;