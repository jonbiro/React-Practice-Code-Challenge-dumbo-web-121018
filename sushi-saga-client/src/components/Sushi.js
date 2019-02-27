import React, { Component } from "react";

class Sushi extends Component {
  state = {
    clicked: false
  };

  clickHandler = sushiObj => {
    if (!this.state.clicked && this.props.money >= this.props.sushi.price) {
      //or you can do: (this.props.money - this.props.sushi.price >=0)
      this.setState({ clicked: !this.state.clicked });
      this.props.clickHandler(sushiObj);
    }
  };

  render() {
    return (
      <div className="sushi">
        <div
          className="plate"
          onClick={() => this.clickHandler(this.props.sushi)}
        >
          {this.state.clicked ? null : (
            <img alt="" src={this.props.sushi.img_url} width="100%" />
          )}
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} : ${this.props.sushi.price}
        </h4>
      </div>
    );
  }
}

export default Sushi;
