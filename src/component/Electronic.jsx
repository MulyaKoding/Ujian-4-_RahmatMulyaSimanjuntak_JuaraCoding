import React, { Component } from "react";

export class Electronic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productElectronic: [],
    };
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((response) => response.json())
      .then((listElectronicElectronic) =>
        this.setState({ productElectronic: listElectronicElectronic })
      );
  }
  render() {
    console.log(this.state.productElectronic);
    return (
      <div>
        {this.state.productElectronic.map((listElectronic) => {
          return (
            <div
              key={listElectronic.id}
              className="col-md-3 my-4 container shadow p-3 mb-5 bg-white rounded"
            >
              <div className="card">
                <img src={listElectronic.image} alt="" />
                <div className="card-body">
                  <h3>{listElectronic.title}</h3>
                  <h3>${listElectronic.price}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Electronic;
