import React, { Component } from "react";

export class MenClothing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productMenClothing: [],
    };
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products/category/men clothing")
      .then((response) => response.json())
      .then((listMenClothing) =>
        this.setState({ productMenClothing: listMenClothing })
      );
  }
  render() {
    console.log(this.state.productMenClothing);
    return (
      <div>
        {this.state.productMenClothing.map((listMenClothing) => {
          return (
            <div
              key={listMenClothing.id}
              className="col-md-3 my-4 container shadow p-3 mb-5 bg-white rounded"
            >
              <div className="card">
                <img src={listMenClothing.image} alt="" />
                <div className="card-body">
                  <h3>{listMenClothing.title}</h3>
                  <h3>${listMenClothing.price}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MenClothing;
