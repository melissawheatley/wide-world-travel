import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main-body';
import PrettyPhoto from './img/ICELAND.jpg';
import Guides from './Guides';
import Footer from './Footer';



const destinations = [
  {
    url :"#",
    name : "Iceland",
    key : 1
  },
  {
    url : "#",
    name: "Portugal",
    key: 2
  },
  {
    url : "#",
    name : "China",
    key : 3
  },
  {
    url : "#",
    name : "DRC",
    key : 4
  }
 ]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header Title="Wide World Travel, Inc" />
        <Main PrettyPhoto={PrettyPhoto} />
        <Guides />
            <Footer destinations={destinations} />
      </div>
    );
  }
}

export default App;
