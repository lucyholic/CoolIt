import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Thoughts extends Component {
  constructor() {
    super()
    this.state = {
      buttonText: 'Show All',
      showAll: false,
      thoughts: [],
      filteredThoughts: []
    }

    this.handleShowToggle = this.handleShowToggle.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  componentDidMount() {
    axios.get('/api/thoughts').then(response => {
      this.setState({
        thoughts: response.data,
        filteredThoughts: response.data.filter(thought => thought.idea_id == null)
      })
    })
  }

  handleShowToggle() {
    const { thoughts, showAll } = this.state;
    
    if (showAll)
    {
      this.setState ({
        filteredThoughts: thoughts.filter(thought => thought.idea_id == null),
        buttonText: 'Show All',
        showAll: false
      })

    }
    else
    {
      this.setState ({
        filteredThoughts: thoughts,
        buttonText: 'Show Unused',
        showAll: true
      })
    }
  }

  handleSort() {
    const { filteredThoughts } = this.state;
    this.setState({
      filteredThoughts: filteredThoughts.sort(function(a, b) {
        return b.description.toLowerCase() < a.description.toLowerCase() ? 1 : -1;
      })
    })
  }

  render() {
    const { filteredThoughts, buttonText } = this.state;

    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='card'>
              <div className='card-header'>
                My Thoughts
                <Link className='btn btn-outline-primary btn-sm mb-3 btn-right' to='/thoughts/create'>
                New Thought</Link>
              </div>

              <div className='card-body'>
                <button 
                  className="btn btn-secondary"
                  onClick={this.handleShowToggle}>{ buttonText }</button>

              <div className="dropdown show">
                <a className="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Sort Thoughts
                </a>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <button className="dropdown-item" onClick={this.handleSort}>By Description</button>
                  <button className="dropdown-item">By Expiration Date</button>
                  <button className="dropdown-item">By Priority</button>
                </div>
              </div>
              
                <ul className='list-group list-group-flush'>
                  {filteredThoughts.map(thought => (
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