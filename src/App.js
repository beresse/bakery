import React from "react";
import "./App.css";
import "nes.css/css/nes.min.css";
import Add from "./Add";
import Pay from "./Pay";
import List from "./List";
import Button from "./Button"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 'Add',
      items: [],
    }
  }

  selectAdd = () => {
    this.setState({
      activeTab: "Add"
    })
  }

  selectList = () => {
    this.setState({
      activeTab: "List"
    })
  }

  selectPay = () => {
    this.setState({
      activeTab: "Pay"
    })
  }

  addItem = (name, price) => {
    const items = {
      name: name,
      price: price
    }
    const newItems = this.state.items;
    newItems.push(items)
    this.setState({
      items: newItems
    })
    console.log(this.state.items)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="row button">
            <Button isSelected={this.state.activeTab === "Add" ? "form-control nes-btn" : "form-control nes-btn"} onClick={this.selectAdd}>Add</Button>
            <Button isSelected={this.state.activeTab === "List" ? "form-control nes-btn" : "form-control nes-btn"} onClick={this.selectList}>List</Button>
            <Button isSelected={this.state.activeTab === "Pay" ? "form-control nes-btn" : "form-control nes-btn"} onClick={this.selectPay}>Pay</Button>
          </div>
          <div className="row">
            {this.state.activeTab === "Add" && <Add addItems={this.addItem}></Add>}
            {this.state.activeTab === "List" && <List items={this.state.items}></List>}
            {this.state.activeTab === "Pay" && <Pay></Pay>}
          </div>
        </header>
      </div>
    );
  }
}

export default App;