import { Component } from 'react';

const Content = (Manage) =>
  class extends Component {
    render () {
      return (
        <div className="content">
          <div className="manage-container">
            <Manage/>
          </div>
          <div className="preview-container"></div>
        </div>
      )
    }
  }

export default Content;