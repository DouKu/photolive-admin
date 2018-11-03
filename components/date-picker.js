import { Component } from 'react';
import Select from './select';
import { range } from '../utils';
import { autobind } from 'core-decorators';

@autobind
class DatePicket extends Component {
  componentWillMount() {
    const now = new Date(this.props.default) || new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();
    this.setState({
      year,
      month,
      day
    });
  }

  componentWillReceiveProps (nextProps) {
    const defaultDate = nextProps.default;
    const date = new Date(defaultDate);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    this.setState({
      year,
      month,
      day
    });
  }
  
  constructor () {
    super();
    this.state = {
      year: 0,
      month: 0,
      day: 0
    }
  }
  getYearOpts () {
    const now = new Date();
    const curYear = now.getFullYear();
    const fromYear = 2010;
    return range(curYear - fromYear + 1, fromYear)
      .map(value => ({
        value,
        name: value + ''
      }));
  }
  getMonthOpts () {
    return range(12, 1)
      .map(value => ({
        value,
        name: (value < 10 ? '0' + value : value + '')
      }));
  }
  getDayOpts () {
    return range(31, 1)
      .map(value => ({
        value,
        name: (value < 10 ? '0' + value : value + '')
      }));
  }
  render () {
    return (
      <span>
        <Select
          style={{minWidth: '55px', marginRight: '20px'}}
          defaultValue={this.state.year}
          defaultLabel = {this.state.year + ''}
          options={this.getYearOpts()}
          onChange={this.handleYearChange}>
        </Select>
        <Select
          style={{minWidth: '45px', marginRight: '20px'}}
          defaultValue={this.state.month}
          defaultLabel = {(this.state.month < 10 ? '0' + this.state.month : this.state.month + '')}
          options={this.getMonthOpts()}
          onChange={this.handleMonthChange}>
        </Select>
        <Select
          style={{minWidth: '45px'}}
          defaultValue={this.state.day}
          defaultLabel = {(this.state.day < 10 ? '0' + this.state.day : this.state.day + '')}
          options={this.getDayOpts()}
          onChange={this.handleDayChange}>
        </Select>
      </span>
    );
  }
  handleYearChange (year) {
    const date = new Date();
    date.setFullYear(year);
    date.setMonth(this.state.month);
    date.setDate(this.state.day);
    this.props.onChange(date);
  }
  handleMonthChange (month) {
    const date = new Date();
    date.setFullYear(this.state.year);
    date.setMonth(month);
    date.setDate(this.state.day);
    this.props.onChange(date);
  }
  handleDayChange (day) {
    const date = new Date();
    date.setFullYear(this.state.year);
    date.setMonth(this.state.month);
    date.setDate(day);
    this.props.onChange(date);
  }
}

export default DatePicket;