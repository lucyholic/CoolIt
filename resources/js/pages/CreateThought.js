import React, { Component } from 'react';
import axios from 'axios';

class CreateThought extends Component {

  constructor(props) {
    super(props)
    this.state = {
      description: '',
      priority: 0,
      errors: []
    }

    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleCreateNewThought = this.handleCreateNewThought.bind(this)
    this.hasErrorFor = this.hasErrorFor.bind(this)
    this.renderErrorFor = this.renderErrorFor.bind(this)
  }

  handleFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCreateNewThought(event) {
    event.preventDefault();
    const { history } = this.props;

    const thought = {
      description: this.state.description,
      priority: this.state.priority
    }

    axios.post('/api/thoughts', thought).then(response => {
      history.push('/thoughts')
    }).catch(error => {
      this.setState({
        errors: error.response.data.errors
      })
    })
  }

  hasErrorFor (field) {
    return !!this.state.errors[field]
  }

  renderErrorFor (field) {
    if (this.hasErrorFor(field)) {
      return (
        <span className='invalid-feedback'>
          <strong>{this.state.errors[field][0]}</strong>
        </span>
      )
    }
  }

  render() {
    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-header'>Create a New Thought</div>
              <div className='card-body'>
                <form onSubmit={this.handleCreateNewThought}>
                  <div className='form-group'>
                    <label htmlFor='description'>Description</label>
                    <input 
                      id='description'
                      type='text'
                      className={`form-control ${this.hasErrorFor('description') ? 'is-invalid' : ''}`}
                      name='description'
                      value={this.state.description}
                      onChange={this.handleFieldChange} />
                      {this.renderErrorFor('description')}
                  </div>

                  <div className='form-group'>
                    <label htmlFor='priority'>Priority</label>
                    <select 
                      id='priority'
                      type='text'
                      className={`form-control ${this.hasErrorFor('priority') ? 'is-invalid' : ''}`}
                      name='priority'
                      value={this.state.priority}
                      onChange={this.handleFieldChange}>
                        <option />
                        <option value='5'>5</option>
                        <option value='4'>4</option>
                        <option value='3'>3</option>
                        <option value='2'>2</option>
                        <option value='1'>1</option>
                    </select>
                    {this.renderErrorFor('priority')}
                  </div>
                  
                  <button className='btn btn-primary'>Create</button>
                  
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateThought;