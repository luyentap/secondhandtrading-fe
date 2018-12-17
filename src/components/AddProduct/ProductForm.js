import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import ProductService from "./../../services/ProductService";
import ImageUpload from "./../ShareComponent/ImageUpload";
import { storage } from "../../config/Firebase";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        price: "",
        img_link: "",
        status: "",
        productName: "",
        description: ""
      },
      image: null
    };
  }

  handleChange = event => {
    const { product } = this.state;
    product[event.target.name] = event.target.value;
    this.setState({ product });
  };

  handleSubmit = async () => {
    if (this.state.image) {
      const { product } = this.state;
      const data = {
        price: product.price,
        img_link: product.img_link,
        status: "Còn hàng",
        type: product.description,
        name: product.productName,
        userId: localStorage.getItem("userId")
      };
      console.log("post", data);
      ProductService.createProduct(data);
      window.location.href = "/";
    } else {
      alert("Upload hình ảnh");
    }
  };

  handleUploadChange = event => {
    if (event.target.files[0]) {
      const image = event.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload = event => {
    event.preventDefault();
    const { image } = this.state;
    if (image) {
      storage.ref(`images/${image.name}`).put(image);
      storage
        .ref("images")
        .child(image.name)
        .getDownloadURL()
        .then(url => {
          this.setState({
            product: {
              img_link: url
            }
          });
        });
    }
  };

  render() {
    const { product } = this.state;
    return (
      <div>
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
          onError={errors => console.log(errors)}
        >
          <TextValidator
            label="Tên sản phẩm*"
            onChange={this.handleChange}
            name="productName"
            value={product.productName}
            validators={["required"]}
            errorMessages={["Bắt buộc điền dòng này"]}
            fullWidth
          />

          <TextValidator
            label="Giá tiền (VND)*"
            onChange={this.handleChange}
            name="price"
            value={product.price}
            validators={["required", "isNumber"]}
            errorMessages={["Bắt buộc điền dòng này", "Giá không hợp lệ"]}
            fullWidth
          />

          <TextValidator
            label="Mô tả"
            onChange={this.handleChange}
            name="description"
            value={product.description}
            fullWidth
          />
          <hr />
          <ImageUpload
            onChange={this.handleUploadChange}
            url={this.state.product.img_link}
          />
          <button onClick={this.handleUpload}>Upload ảnh</button>
          <Button type="submit">Tiếp tục</Button>
        </ValidatorForm>
      </div>
    );
  }
}

ProductForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductForm);
