import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
	  counter: 0,
	  plates: [],
	  money: 100
	  
  };
  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(sushi => this.setState({ sushis: sushi }));
  }

  moreClickHandler = () => {
  	this.setState({counter: this.state.counter+4})
  }
	plateClickHandler = (sushiObj) => {
		this.setState({plates: [...this.state.plates, sushiObj],
			money: (this.state.money - sushiObj.price)})
	}
  
  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} counter={this.state.counter} moreClickHandler={this.moreClickHandler} plateClickHandler={this.plateClickHandler} money={this.state.money} />
        <Table plates={this.state.plates} money={this.state.money} />
      </div>
    );
  }
}

export default App;
