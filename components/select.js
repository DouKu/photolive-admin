import { Component } from 'react';
import RcSelect, { Option, OptGroup } from 'rc-select';
import { autobind } from 'core-decorators';

@autobind
class Select extends Component {
  componentWillMount () {
    const { defaultValue, defaultLabel } = this.props;
    this.setState({
      value: defaultValue,
      label: defaultLabel
    });
  }

  componentWillReceiveProps(nextProps) {
    const { defaultValue, defaultLabel } = nextProps;
    this.setState({
      value: defaultValue,
      label: defaultLabel
    });
  }
  
  constructor () {
    super();
    this.state = {
      value: '',
      label: ''
    }
  }
  renderOptions () {
    const options = this.props.options || [];
    return options.map((option) => (
      <Option key={option.value} value={option.name}>{option.name}</Option>
    ))
  }
  onSelect (label, option) {
    let value = parseInt(option.key);
    this.setState({
      value,
      label
    });
    this.props.onChange(value, label);
  }
  render () {
    return (
      <RcSelect value={this.state.label} 
        showSearch={false} 
        style={this.props.style}
        onSelect={this.onSelect}>
        {this.renderOptions()}
      </RcSelect>
    )
  }
}

export default Select;