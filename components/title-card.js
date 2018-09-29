import { Component } from 'react';

class TitleCard extends Component {
  render () {
    return (
      <div className="pl-title-card">
        <h3 className="title">{this.props.title}</h3>
        <p className="desc">{this.props.desc}</p>
      </div>
    )
  }
}

export default TitleCard;