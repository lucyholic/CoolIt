import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Thoughts extends Component {
  constructor() {
    super()
    this.state = {
      thoughts: []
    }
  }

  componentDidMount() {
    axios.get('/api/thoughts/getall').then(response => {
      this.setState({
        thoughts: response.data
      })
    })
  }

  render() {
    const { thoughts } = this.state;

    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='card'>
              <div className='card-header'>
                My Thoughts
                <Link className='btn btn-outline-primary btn-sm mb-3 btn-right' to='/newthought'>
                New Thought</Link>
              </div>

              <div className='card-body'>
                <ul className='list-group list-group-flush'>
                  {thoughts.map(thought => (
                    <li className='list-group-item d-flex justify-content-between align-items-center' key={thought.id}>{thought.description}
                    <span className='badge badge-warning'>
                      Expires on: {thought.expiration_date}
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

export default Thoughts;