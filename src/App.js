import React, { Component } from 'react';
import firebase from 'firebase';
import CreateProduct from './pages/CreateProduct';
import './App.css';

// Initialize Firebase
let config = {
  apiKey: 'AIzaSyBV9fTZbmYX290lOxJ6UCkGJTYKL6_vBww',
  authDomain: 'walmart-xml-list.firebaseapp.com',
  databaseURL: 'https://walmart-xml-list.firebaseio.com',
  projectId: 'walmart-xml-list',
  storageBucket: 'walmart-xml-list.appspot.com',
  messagingSenderId: '519020373877'
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateProduct />
      </div>
    );
  }
}

export default App;
