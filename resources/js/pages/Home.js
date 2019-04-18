import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
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
        </div>
      </div>
    )
  }
}

export default Home;