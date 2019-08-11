import React from 'react';

class ClipItem extends React.Component {

  render() {

    return(
      <li>
        <h2>{this.props.clipObj.title}</h2>
      </li>
    )
  }
}

export default ClipItem;
