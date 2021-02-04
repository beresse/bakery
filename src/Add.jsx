import React from "react";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      price: 1,
    };
  }

  updateItemName = (e) => {
    this.setState({
      productName: e.target.value,
    });
  };

  updatePrice = (e) => {
    this.setState({
      price: e.target.value,
    });
  };

  add = () => {
    this.props.addItems(this.state.productName, this.state.price);
    console.log("fonction add =", this.state.productName, this.state.price);
  };

  render() {
    return (
      <div>
        <p>Ajouter</p>
        <div className="input-group mb-2">
          <input
            onChange={this.updateItemName}
            type="text"
            className="form-control"
            placeholder="Article"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="nes-btn"
            type="button"
            onClick={this.add}
          >
            Add
          </button>
        </div>
        <input
        className="inputArticle"
          height="48"
          min="1"
          max="20"
          type="range"
          onChange={this.updatePrice}
          value={this.state.price}
        ></input>
        <p>{this.state.price}€</p>
      </div>
    );
  }
}

export default Add;