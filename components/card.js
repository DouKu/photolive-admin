import { Component } from 'react';
import { autobind } from 'core-decorators';

@autobind
class Card extends Component {
  handleEdit () {
    const { album, onEdit } = this.props;
    onEdit(album);
  }
  handleShowMenu () {
    const { album, onShowMenu } = this.props;
    onShowMenu(album);
  }
  handleShowGraph () {
    const { album, onShowGraph } = this.props;
    onShowGraph(album);
  }
  handleDelete () {
    const { album, onDelete } = this.props;
    onDelete(album);
  }
  render () {
    const { album } = this.props;
    return (
      <li>
        <div className="card-item">
          <img src={album.avatar}/>
          <div className="card-footer">{album.name}</div>
          <ul className="card-footer-btns">
              <li>
                <i className="icon-edit" onClick={this.handleEdit}></i>
              </li>
              <li>
                <i className="icon-menu" onClick={this.handleShowGraph}></i>
              </li>
              <li>
                <i className="icon-graph" onClick={this.handleShowGraph}></i>
              </li>
              <li>
                <i className="icon-delete" onClick={this.handleDelete}></i>
              </li>
            </ul>
        </div>
      </li>
    )
  }
}

export default Card;