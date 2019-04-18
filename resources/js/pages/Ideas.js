import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Ideas extends Component {
  constructor() {
    super()
    this.state = {
      ideas: []
    }
  }

  componentDidMount() {
    axios.get('/api/ideas').then(response => {
      this.setState({
        ideas: response.data
      })
    })
  }

  render() {
    const { ideas } = this.state;

    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='card'>
              <div className='card-header'>
                My Ideas
                <Link className='btn btn-outline-primary btn-sm mb-3 btn-right' to='/ideas/create'>
                New Idea</Link>
              </div>

              <div className='card-body'>
                <ul className='list-group list-group-flush'>
                  {ideas.map(idea => (
                    <li className='list-group-item d-flex justify-content-between align-items-center' key={idea.id}>{idea.description}
                    <span className='badge badge-warning'>
                      Expires on: {idea.expiration_date}
                    </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Ideas;