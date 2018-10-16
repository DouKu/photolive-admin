import { Component } from 'react';
import RcSelect, { Option, OptGroup } from 'rc-select';

class Select extends Component {
  render () {
    return (
      <RcSelect value="01" showSearch={false} style={{minWidth: '100px'}}>
        <Option value="01">jack</Option>
        <Option value="02">GGG</Option>
        <Option value="02">GGG</Option>
        <Option value="02">GGG</Option>
        <Option value="02">GGG</Option>
        <Option value="02">GGG</Option>
        <Option value="02">GGG</Option>
        <Option value="02">GGG</Option>
        <Option value="02">GGG</Option>
        <Option value="02">GGG</Option>
        <Option value="02">GGG</Option>
        <Option value="02">GGG</Option>
      </RcSelect>
    )
  }
}

export default Select;