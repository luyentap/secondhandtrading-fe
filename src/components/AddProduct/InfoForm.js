import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
// import UserService from "./../../services/UserService";

const style = {
  textAlign: "center"
};

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class MyForm extends React.Component {
  state = {
    info: {
      phoneNumber: "",
      email: "",
      fullName: "",
      address: ""
    }
  };

  componentDidMount = () => {
    this.loadData();
  };

  loadData = () => {
    let { info } = this.state;
    let user = {
      id: "123",
      fullName: "Nguyen Le Quynh",
      email: "nguyenlequynh.dn@gmail.com",
      phoneNumber: "0905735691"
    };
    info = { ...user };
    this.setState({ info });
  };

  handleChange = event => {
    const { info } = this.state;
    info[event.target.name] = event.target.value;
    this.setState({ info });
  };

  handleSubmit = () => {
    // your submit logic
    // UserServices.save(this.state.info);
  };

  render() {
    const { info } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h5" component="h3">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your
            application.
          </Typography>
        </Paper>
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
          onError={errors => console.log(errors)}
          style={style}
        >
          <TextValidator
            label="Số điện thoại"
            onChange={this.handleChange}
            name="phoneNumber"
            value={info.phoneNumber}
            validators={["required", "isNumber"]}
            errorMessages={["this field is required", "Invalid phone number"]}
            fullWidth
          />

          <TextValidator
            label="Họ và tên"
            onChange={this.handleChange}
            name="fullName"
            value={info.fullName}
            validators={["required"]}
            errorMessages={["this field is required"]}
            fullWidth
          />

          <TextValidator
            label="Email"
            onChange={this.handleChange}
            name="email"
            value={info.email}
            validators={["required", "isEmail"]}
            errorMessages={["this field is required", "email is not valid"]}
            fullWidth
          />

          <TextValidator
            label="Địa chỉ liên lạc"
            onChange={this.handleChange}
            name="address"
            value={info.address}
            validators={["required"]}
            errorMessages={["this field is required"]}
            fullWidth
          />
          <Button type="submit">Tiếp tục</Button>
        </ValidatorForm>
      </div>
    );
  }
}

MyForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyForm);
