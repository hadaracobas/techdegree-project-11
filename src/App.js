// Import react and components
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Search from './components/Search';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Birds from './components/Birds';



class App extends Component {
//Push the searched term to history after submission
  handleSubmit = (e, history, newTerm) => {
  e.preventDefault();
  e.currentTarget.reset();
  let path = `/search/${newTerm}`;
  history.push(path);
  }

render () {
return (
  <BrowserRouter>

      <div className="container" >
      <Route
        path="/"
        render={ props =>
        <Header handleSubmit={this.handleSubmit} history={props.history} />
        } />

        <Route exact path="/" render={ () => <Cats term="cats"/>}/>
        <Route path="/cats" render={ () => <Cats term="cats"/>} />
        <Route path="/dogs" render={ () => <Dogs term="dogs"/>} />
        <Route path="/birds" render={ () => <Birds term="birds"/>} />

        <Route
          exact
          path="/search/:displayTerm"
          render={ (props) =>
          <Search term={props.match.params.displayTerm}/>
          }/>


      </div>

  </BrowserRouter>
);
}
}

export default App;
