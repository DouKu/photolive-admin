import { Component } from 'react';
import classNames from 'classnames';

class LabelContainer extends Component {
  render () {
    const { title, check, first = false, last = false } = this.props;
    const leftIconClassName = classNames({
      'check-icon': check,
      'close-icon': !check,
      'left-icon': true
    });
    const upIconClassName = classNames({
      'up-btn': true,
      'up-btn-disabled': first
    });
    const downIconClassName = classNames({
      'down-btn': true,
      'down-btn-disabled': last
    })
    return (
      <div className="label-container">
        <div className="left-contaner">
          <span>{title}</span>
          <i className={leftIconClassName}></i>
        </div>
        <div className="right-container">
          <span className={upIconClassName}>上移<i className="up-icon"></i></span>
          <span className={downIconClassName}>下移<i className="down-icon"></i></span>
        </div>
      </div>
    )
  }
}

export default LabelContainer;