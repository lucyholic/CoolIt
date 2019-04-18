import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Thoughts, Ideas, Solutions, Products, 
  CreateThought, CreateIdea } from '../pages';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="containter">
          <Menu />
          <Route exact path='/' component={ Home } />
          <Route exact path='/thoughts' component={ Thoughts } />
          <Route exact path='/thoughts/create' component={ CreateThought} />
          <Route exact path='/ideas' component={ Ideas } />
          <Route exact path='/ideas/create' component={ CreateIdea } />
        </div>
      </BrowserRouter>
    )
  }
}

if (document.getElementById('app'))
{
  ReactDOM.render(<App />, document.getElementById('app'));
}
