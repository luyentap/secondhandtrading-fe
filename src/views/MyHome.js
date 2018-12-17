import React, { Component } from "react";
import ProductList from "./../components/AddProduct/ProductList";

class MyHome extends Component {
  render() {
    return <ProductList isProfile={true} />;
  }
}

export default MyHome;
