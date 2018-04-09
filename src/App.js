import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main-body';
import PrettyPhoto from './img/ICELAND.jpg';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header Title="Wide World Travel, Inc" />
        <Main PrettyPhoto={PrettyPhoto} />
        <Footer />
      </div>
    );
  }
}

export default App;
