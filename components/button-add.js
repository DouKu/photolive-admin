import { Component } from 'react';

class ButtonAdd extends Component {
  render () {
    const { children, style } = this.props;
    return (
      <button style={style} className="pl-button-add">{children}</button>
    )
  }
}

export default ButtonAdd;
