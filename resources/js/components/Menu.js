import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>CoolIt</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className='nav-link' to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/thoughts'>Thoughts</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/ideas'>Ideas</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/solutions'>Solutions</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/products'>Products</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Menu;