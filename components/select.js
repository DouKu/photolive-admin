import { Component } from 'react';
import RcSelect, { Option, OptGroup } from 'rc-select';
import { autobind } from 'core-decorators';

@autobind
class Select extends Component {
  componentWillMount () {
    const { defaultValue } = this.props
    this.setState({
      value: defaultValue
    })
  }
  
  constructor () {
    super();
    this.state = {
      value: ''
    }
  }
  renderOptions () {
    const options = this.props.options || [];
    return options.map((option, index) => {
      return (
        <Option key={index} value={option.name}>{option.name}</Option>
      )
    })
  }
  onSelect (value, option) {
    this.setState({
      value
    })
  }
  render () {
    return (
      <RcSelect value={this.state.value} 
        showSearch={false} 
        style={{minWidth: '100px'}}
        onSelect={this.onSelect}>
        {this.renderOptions()}
      </RcSelect>
    )
  }
}

export default Select;