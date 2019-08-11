import React from 'react';

import ClipItem from '../components/ClipItem';

class ListContainer extends React.Component {

  state = {
    clips: []
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/likes/')
      .then(resp => resp.json())
      .then(json => {
        this.setState({clips: json.reverse()})
      })
  }

  render() {

    const clipsArr = this.state.clips.map(clip => {
      return <ClipItem key={clip.id} clipObj={clip} />
    })

    return(
      <ul className='list-group list-group-flush'>
        {clipsArr}
      </ul>
    )

  }
}

export default ListContainer;
