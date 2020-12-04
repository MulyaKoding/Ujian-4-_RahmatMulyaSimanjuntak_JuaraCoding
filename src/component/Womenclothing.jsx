import React, { Component } from "react";

export class WomenClothing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productWomenCloting: [],
    };
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products/category/women clothing")
      .then((response) => response.json())
      .then((listWomenCloting) =>
        this.setState({ productWomenCloting: listWomenCloting })
      );
  }
  render() {
    console.log(this.state.productWomenCloting);
    return (
      <div>
        {this.state.productWomenCloting.map((listWomenCloting) => {
          return (
            <div
              key={listWomenCloting.id}
              className="col-md-3 my-4 container shadow p-3 mb-5 bg-white rounded"
            >
              <div className="card">
                <img src={listWomenCloting.image} alt="" />
                <div className="card-body">
                  <h3>{listWomenCloting.title}</h3>
                  <h3>${listWomenCloting.price}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default WomenClothing;
