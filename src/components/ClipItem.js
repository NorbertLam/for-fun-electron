import React from 'react';

class ClipItem extends React.Component {

  render() {

    return(
      <li className='list-group-item flex-container'>
        <img className='thumbnail' src={this.props.clipObj.thumbnail} alt=""/>
        <div>
          {/* <h3>{this.props.clipObj.title}</h3> */}
          <span>{this.props.clipObj.title}</span>
        </div>
      </li>
    )
  }
}

export default ClipItem;
