import { Component } from 'react';
import { autobind } from 'core-decorators';

@autobind
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
