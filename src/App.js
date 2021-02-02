import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from "./Add.jsx"
import List from "./List.jsx"
import Pay from "./Pay.jsx"
import Button from "./Button.jsx"


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      activeTab:'add',
      items: [''],

    }
  }
};

export default App;
