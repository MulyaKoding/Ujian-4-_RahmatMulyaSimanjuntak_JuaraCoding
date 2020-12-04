import React, { Component } from "react";

export class Jewelery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productJewelery: [],
    };
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((response) => response.json())
      .then((listJewelery) =>
        this.setState({ productJewelery: listJewelery })
      );
  }
  render() {
    console.log(this.state.productJewelery);
    return (
      <div>
        {this.state.productJewelery.map((listJewelery) => {
          return (
            <div
              key={listJewelery.id}
              className="col-md-3 my-4 container shadow p-3 mb-5 bg-white rounded"
            >
              <div className="card">
                <img src={listJewelery.image} alt="" />
                <div className="card-body">
                  <h3>{listJewelery.title}</h3>
                  <h3>${listJewelery.price}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Jewelery;
