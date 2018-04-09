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
        <footer>
          <div>
          <h3>Destinations</h3>
            <ul>
              <Footer Destination="China" />
              <Footer Destination="Egypt" />
              <Footer Destination="Portugal" />
              <Footer Destination="Greece" />
            </ul>
          <p className = "Copyright">&copy; 2018 World Wide Travel</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
