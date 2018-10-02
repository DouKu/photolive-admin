import { Component } from 'react';

class FormItem extends Component {
  render () {
    const { label, children, className = '' } = this.props;
    return (
      <div className={'pl-form-item-card ' + className}>
        <li className="pl-form-item">
          <div className="pl-form-label">
            <label htmlFor="">{label}</label>
          </div>
          <div className="pl-form-input">
            {children}
          </div>
        </li>
      </div>
    )
  }
}

export default FormItem;