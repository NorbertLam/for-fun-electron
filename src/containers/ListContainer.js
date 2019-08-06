import React from 'react';

import ClipItem from '../components/ClipItem';

class ListContainer extends React.Component {

  render() {

    return(
      <ul className='list-container'>
        <ClipItem />
      </ul>
    )

  }
}

export default ListContainer;
