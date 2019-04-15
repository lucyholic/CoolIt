import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Thoughts, Ideas, Solutions, Products, CreateThought } from '../pages';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="containter">
          <Menu />
          <Route exact path='/' component={ Home } />
          <Route exact path='/thoughts' component={ Thoughts } />
          <Route exact path='/newthought' component={ CreateThought} />
          <Route exact path='/ideas' component={ Ideas } />
        </div>
      </BrowserRouter>
    )
  }
}

if (document.getElementById('app'))
{
  ReactDOM.render(<App />, document.getElementById('app'));
}
