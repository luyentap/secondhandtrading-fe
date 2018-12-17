import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MediaCard from "./../ShareComponent/MediaCard";
import ProductService from "./../../services/ProductService";

const styles = theme => ({
  root: {
    marginTop: 50,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 400,
    transform: "translateZ(0)"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});

class ProductList extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.reloadData();
  }

  reloadData = async () => {
    let fetchedData = this.props.isProfile
      ? await ProductService.getUserProducts()
      : await ProductService.getAllProducts();
    this.setState({
      data: fetchedData.data
    });
  };

  changeProductStatus = product => {
    product.status =
      product.status === "Đang giao dịch" ? "Còn hàng" : "Đang giao dịch";
    console.log("put", product);
    const id = product._id;
    delete product._id;
    delete product.user;
    delete product.__v;
    ProductService.updateProduct(id, product).then(() => {
      this.reloadData();
    });
  };

  removeProduct = id => {
    ProductService.deleteProduct(id).then(() => {
      this.reloadData();
    });
  };

  render() {
    const { classes } = this.props;
    const { data } = this.state;
    const reverseData = data ? data.reverse() : [];
    return (
      <div className={classes.root}>
        {reverseData.map((product, index) => (
          <MediaCard
            product={product}
            key={product._id}
            isProfile={this.props.isProfile}
            editItem={this.changeProductStatus.bind(this)}
            removeItem={this.removeProduct.bind(this)}
          />
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductList);
