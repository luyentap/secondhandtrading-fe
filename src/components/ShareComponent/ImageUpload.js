import React, { Component } from "react";

const style = {
  display: "flex",
  flexDirection: "column"
};

class ImageUpload extends Component {
  render() {
    const { onChange, url } = this.props;
    return (
      <div style={style}>
        <input type="file" onChange={onChange} />
        <br />
        <img
          src={url || "https://via.placeholder.com/200x150"}
          alt="Uploaded images"
          height="150"
          width="200"
        />
      </div>
    );
  }
}

export default ImageUpload;
