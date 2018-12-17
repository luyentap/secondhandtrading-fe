import React, { Component } from "react";
import ProductForm from "./../components/AddProduct/ProductForm";

const style = {
  width: "70%",
  margin: "auto"
};

class Post extends Component {
  render() {
    return (
      <div style={style}>
        <ProductForm />
      </div>
    );
  }
}

export default Post;
