import React, { Component } from 'react';
import axios from 'axios';

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
      <div>
        Ideas!
      </div>
    )
  }
}

export default Ideas;