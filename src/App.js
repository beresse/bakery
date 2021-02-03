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
      activeTabs:'add',
      items: [''],

    }
    this.selectAdd = this.selectAdd.bind(this);
    this.selectList = this.selectList.bind(this);
    this.selectPay = this.selectPay.bind(this);
  }
  selectAdd(){
    this.setState({
      activeTabs : 'add'
    })
  }
  selectList(){
    this.setState({
      activeTabs : 'list'
    })
  }
  selectPay(){
    this.setState({
      activeTabs : 'pay'
    })
  }
  render(){
    return(
      <div className="App">
        <Button onClick={this.selectAdd} isSelected={this.state.activeTabs ==="add"}>Add</Button>
        <Button onClick={this.selectList} isSelected={this.state.activeTabs ==="list"}>List</Button>
        <Button onClick={this.selectPay} isSelected={this.state.activeTabs ==="pay"}>Pay</Button>
        

      </div>
    )
  }
};

export default App;
