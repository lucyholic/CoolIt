import React, { Component } from 'react';

class CreateIdea extends Component {
  render() {
    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='card'>
              <div className='card-header'>New Idea</div>
              <div className='card-body'>
                Form for New Idea
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateIdea;