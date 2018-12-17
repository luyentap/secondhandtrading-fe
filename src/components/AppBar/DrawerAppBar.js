/* eslint-disable no-restricted-globals */
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LinkButton from "./../ShareComponent/LinkButton";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  link: {
    textDecoration: "none",
    color: "none"
  },
  avatar: {
    marginRight: 2
  }
};

class DrawerAppBar extends React.Component {
  state = {
    open: false,
    anchorEl: null
  };

  logout = () => {
    localStorage.removeItem("accessToken");
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  postOnClick = () => {
    if (localStorage.getItem("accessToken") === null) {
      this.setState({ open: true });
    } else {
      window.location.href = "/post";
    }
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleMenuClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <LinkButton to="/">Website trao đổi đồ cũ</LinkButton>
            </Typography>

            <Button onClick={this.postOnClick}>Đăng tin</Button>
            {/* <LinkButton to="/post">Đăng tin</LinkButton> */}

            {localStorage.getItem("accessToken") !== null ? (
              <div>
                <Button
                  aria-owns={anchorEl ? "simple-menu" : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenuClick}
                >
                  <Avatar
                    alt={localStorage.getItem("fullName")}
                    src={localStorage.getItem("avatar")}
                    className={classes.avatar}
                  />
                  {localStorage.getItem("fullName")}
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleMenuClose}
                >
                  <MenuItem>
                    <Link to="/profile" className={classes.link}>
                      Bài đăng
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={this.logout}>Đăng xuất</MenuItem>
                </Menu>
              </div>
            ) : (
              <LinkButton to="/login">Đăng nhập</LinkButton>
            )}
          </Toolbar>
        </AppBar>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Bạn cần đăng nhập trước"}
          </DialogTitle>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Tôi đã biết
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

DrawerAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DrawerAppBar);
