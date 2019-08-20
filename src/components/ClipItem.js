import React from 'react';

class ClipItem extends React.Component {

showImage = () => {
  // ipcRenderer.send('toggle-clip')
}

  render() {

    return(
      <li className='list-group-item flex-container' onClick={() => this.showImage()}>
        <img className='thumbnail' src={this.props.clipObj.thumbnail} alt=""/>
        <div>
          <span>{this.props.clipObj.title}</span>
        </div>
      </li>
    )
  }
}

export default ClipItem;
