import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import {Header} from './Layouts'
import {Catalog} from "./Views"

class App extends Component {
  render() {
    const classes = this.props;
    const Secondary = () => <h2>Secondary</h2>;

    return (
      <div className={classes.root}>
        <Router>
          <Fragment>
            <Header />
            <Route path="/" exact component={Catalog} />
            <Route path="/secondary" component={Secondary} />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
