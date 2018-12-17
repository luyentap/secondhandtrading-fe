import axios from "./../config/Axios";

class ProductService {
  static createProduct(data) {
    return axios.post("products", data);
  }

  static getProduct(id) {
    return axios.get(`products/${id}`);
  }

  static getAllProducts() {
    return axios.get("products");
  }

  static updateProduct(id, data) {
    return axios.put(`products/${id}`, data);
  }

  static deleteProduct(id) {
    return axios.delete(`products/${id}`);
  }

  static getUserProducts() {
    return axios.get("users/getProducts");
  }
}

export default ProductService;
