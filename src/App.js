import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main-body';
import PrettyPhoto from './img/ICELAND.jpg';
import Footer from './Footer';

const destinations = [
  {
    url :"#",
    name : "Iceland"
  },
  {
    url : "#",
    name: "Portugal"
  },
  {
    url : "#",
    name : "China"
  },
  {
    url : "#",
    name : "DRC"
  }
 ]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header Title="Wide World Travel, Inc" />
        <Main PrettyPhoto={PrettyPhoto} />
            <Footer destinations={destinations} />
      </div>
    );
  }
}

export default App;
