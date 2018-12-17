import * as React from "react";
import Button from "@material-ui/core/Button";

class FacebookLogin extends React.Component {
  onLogin = () => {
    window.open(
      process.env.REACT_APP_API_URL + "auth/facebook",
      "name",
      "height=500, width=500, location=0"
    );
  };
  render() {
    return (
      <Button
        color="primary"
        style={{ background: "#4267b2", width: "70%", borderRadius: "50px" }}
        onClick={this.onLogin}
      >
        <i
          className="fab fa-facebook-f"
          style={{ color: "#ffffff", marginRight: "10px" }}
        />
        <p
          style={{
            fontFamily: "Trebuchet MS",
            color: "#f0f0f0",
            fontSize: "0.8em"
          }}
        >
          Login with facebook
        </p>
      </Button>
    );
  }
}

export default FacebookLogin;
