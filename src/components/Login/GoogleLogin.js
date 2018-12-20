import Button from "@material-ui/core/Button";
import * as React from "react";

class GoogleLogin extends React.Component {
  onLogin = () => {
    window.location.href=`
      ${process.env.REACT_APP_API_URL}auth/google`
  };
  render() {
    return (
      <Button
        color="primary"
        style={{
          background: "#b74d46",
          marginTop: "12px",
          width: "70%",
          borderRadius: "50px"
        }}
        onClick={this.onLogin}
      >
        <i
          className="fab fa-google"
          style={{ color: "#ffffff", marginRight: "10px" }}
        />
        <p
          style={{
            fontFamily: "Trebuchet MS",
            color: "#f0f0f0",
            fontSize: "0.8em"
          }}
        >
          Login with google
        </p>
      </Button>
    );
  }
}

export default GoogleLogin;
