import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className='container'>
      
        <div className='card'>
          <div className='card-header'>My Fridge</div>
          <div className='card-body'>
            Unused Thoughts, Unused Ideas
          </div>
        </div>
        <br />
        <div className='card'>
          <div className='card-header'>My Shelf</div>
          <div className='card-body'>
            My Solutions, my products
          </div>
        </div>
      </div>
    )
  }
}

export default Home;