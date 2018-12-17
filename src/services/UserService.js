import axios from "./../config/Axios";

class UserService {
  static getInfo() {
    return axios.get("users/getInfo");
  }

  static getFullName() {
    return axios.get("users/getFullName");
  }
}

export default UserService;
