import * as React from "react";
import { withRouter } from "react-router";
import { Redirect, Route } from "react-router-dom";
import UserService from "./../../services/UserService";

export class AuthRoute extends React.Component {
  // set access token into local storage
  setAccessToken = accessToken => {
    const token = accessToken.substring(7, accessToken.length);
     localStorage.setItem("accessToken", token);
     this.getInfo();
  };

  // refresh page after login
  closeAndRefresh = () => {
    // eslint-disable-next-line no-restricted-globals
     // opener.location.reload(); // reload your login page
    
    // window.close(); // close pop up window

    //fix: redirect the home page
    if(localStorage.getItem("userId")===null || localStorage.getItem("avatar")=== null || localStorage.getItem("fullName") ===null){
      // window.location.reload(); //dont use reload
      // window.location.href= ''; //use it instead of
     this.getInfo();
    //   console.log(localStorage.getItem("userId"));
    //   console.log('localstorage',localStorage)
    }
    else{
      window.location.href= 'http://secondhandtrading-fe.herokuapp.com';
      window.location.href ='';
    }
  };

   getInfo = async () => {
    await UserService.getInfo().then( response => {
      localStorage.setItem("fullName", response.data.google.name);
      localStorage.setItem("avatar", response.data.google.avatar);
      localStorage.setItem("userId", response.data._id);
    });
  }

  render() {
    const { component: Component, ...rest } = this.props;
    if (this.props.location.pathname === "/success_login") {
      this.setAccessToken(this.props.location.search);
      this.closeAndRefresh();
    }
    if (localStorage.getItem("accessToken") === null) {
      return <Route {...rest} render={props => <Component {...props} />} />;
    }
    return <Route {...rest} render={() => <Redirect to="/" />} />;
  }
}

export default withRouter(AuthRoute);
