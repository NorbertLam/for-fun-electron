import React from 'react';

class ClipItem extends React.Component {

  render() {

    return(
      <li className='list-group-item'>
        <img className='thumbnail' src={this.props.clipObj.thumbnail} alt=""/>
        <h2>{this.props.clipObj.title}</h2>
      </li>
    )
  }
}

export default ClipItem;
