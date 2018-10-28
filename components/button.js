import { Component } from 'react';

class Button extends Component {
  render () {
    const { children, style, onClick } = this.props;
    return (
      <button onClick={onClick}
        style={style}
        className="pl-button">
        {children}
      </button>
    )
  }
}

export default Button;
