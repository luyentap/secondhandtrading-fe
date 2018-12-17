import * as axios from "axios";

const apiURL = process.env.REACT_APP_API_URL;

class Request {
  static sendRequest(config) {
    config.headers = {
      "Content-Type": "application/json",
      Accept: "application/json"
    };

    if (localStorage.getItem("accessToken")) {
      config.headers = {
        "X-Auth-Token": localStorage.getItem("accessToken")
      };
    }

    return new Promise((resolve, reject) => {
      axios
        .request(config)
        .then(response => {
          resolve({ data: response.data, error: null });
        })
        .catch(error => {
          if (!error.response) {
            console.log("Can not connect to server");
          }
          if (error && error.response) {
            resolve({ data: null, error: error.response });
          }
        });
    });
  }

  static get(url, params, customAPIURL) {
    const convertArgs = this.convertArgs(params, customAPIURL);
    params = convertArgs.params;
    customAPIURL = convertArgs.customAPIURL;
    const config = {
      method: "get",
      baseURL: customAPIURL || apiURL,
      url,
      params
    };
    return this.sendRequest(config);
  }

  static post(url, data, customAPIURL) {
    const convertArgs = this.convertArgs(data, customAPIURL);
    data = convertArgs.params;
    customAPIURL = convertArgs.customAPIURL;
    const config = {
      method: "post",
      url,
      baseURL: customAPIURL || apiURL,
      data
    };
    return this.sendRequest(config);
  }

  static put(url, data, customAPIURL) {
    const convertArgs = this.convertArgs(data, customAPIURL);
    data = convertArgs.params;
    customAPIURL = convertArgs.customAPIURL;
    const config = {
      method: "put",
      url,
      baseURL: customAPIURL || apiURL,
      data
    };
    return this.sendRequest(config);
  }

  static delete(url, params, customAPIURL) {
    const convertArgs = this.convertArgs(params, customAPIURL);
    params = convertArgs.params;
    customAPIURL = convertArgs.customAPIURL;
    const config = {
      method: "delete",
      url,
      baseURL: customAPIURL || apiURL,
      params
    };
    return this.sendRequest(config);
  }

  static patch(url, params, customAPIURL) {
    const convertArgs = this.convertArgs(params, customAPIURL);
    params = convertArgs.params;
    customAPIURL = convertArgs.customAPIURL;
    const config = {
      method: "patch",
      url,
      baseURL: customAPIURL || apiURL,
      params
    };
    return this.sendRequest(config);
  }

  static convertArgs(params, customAPIURL) {
    if (typeof params === "string") {
      customAPIURL = params;
      params = undefined;
    }
    return { params, customAPIURL };
  }
}

export default Request;
