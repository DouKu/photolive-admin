import { Component } from 'react';

class Button extends Component {
  render () {
    const { children, style } = this.props;
    return (
      <button style={style} className="pl-button">{children}</button>
    )
  }
}

export default Button;
