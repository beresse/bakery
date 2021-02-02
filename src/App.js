import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from "../js/Add.jsx"
import Add from "../js/List.jsx"
import Add from "../js/Pay.jsx"


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      activeTab:'add';
      items: ['']

    }
  }
};

export default App;
