import React, { Component } from 'react';
//const uuidv4 = require('uuid');

class Album extends Component {

  render() {
    var title = this.props.title;
    
    return (
      <div id={title}>
        <h4>{title}</h4>
      </div>
    )
  }
}

export default Album;
