import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { InfiniteScroll } from './components/infiniteScroll/InfiniteScroll'

export const App = ({message, href, fetch}) => {
  fetch && fetch();

  return <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <a
        className="App-link"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {message}
      </a>
    </header>
    <InfiniteScroll />
  </div>;
}

const mapStateToProps = state => ({
  message: state.message,
  href: state.href
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch({type: 'fetch'})
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
