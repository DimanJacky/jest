import React, { Component } from 'react';
import Cars from "./Cars/Cars";

class App extends Component {

  state = {
    cars: [
      {name: 'audi', year: 2018},
      {name: 'chevrolet', year: 2017},
      {name: 'mazda', year: 2019},
    ]
  }

  render() {
    return (
      <div className="App">
        <Cars cars={this.state.cars} />
      </div>
    );
  }
}

export default App;
