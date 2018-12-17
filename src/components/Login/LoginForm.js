import * as React from "react";
import "./LoginForm.scss";
import Grid from "@material-ui/core/Grid";
import GoogleLogin from "./GoogleLogin";
import FacebookLogin from "./FacebookLogin";

class LoginForm extends React.Component {
  render() {
    return (
      <Grid container className="gradient">
        <Grid
          item
          xs={10}
          md={7}
          lg={3}
          sm={10}
          className="login-form"
          style={{ height: "100%", minHeight: "300px" }}
        >
          {/* <img
            src={require("")}
            alt="logo 2handtrading"
            className="login-logo"
          /> */}
          <h1 className="login-title">2 hand trading</h1>
          <div className="login-round-button-row" style={{ marginTop: "30%" }}>
            <GoogleLogin />
            <FacebookLogin />
          </div>
          <div className="footer">
            <h2 className="h2">A product of</h2>
            <h3 className="h3">Team 9</h3>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default LoginForm;
