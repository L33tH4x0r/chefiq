import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Main />
        </div>
      </Router>
    );
  }
}

const Main = () => (
  <main>
    <Route exact path='/' component={Home}/>
  </main>
)

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
      </ul>
    </nav>
    <hr />
  </header>
)


const Home = () => (
  <div>
    <h1>Welcome to the Tornadoes Website!</h1>
  </div>
)

export default App;
