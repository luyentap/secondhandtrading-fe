import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Chip from "@material-ui/core/Chip";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const styles = theme => ({
  card: {
    maxWidth: 400,
    marginBottom: 10
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class RecipeReviewCard extends React.Component {
  state = {
    anchorEl: null
  };

  handleMenuClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, product, isProfile } = this.props;
    const { anchorEl } = this.state;
    const color = product.status === "Còn hàng" ? "primary" : "secondary";
    const isTrading = product.status === "Đang giao dịch";
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              A
            </Avatar>
          }
          action={
            isProfile ? (
              <IconButton>
                <MoreVertIcon onClick={this.handleMenuClick} />
              </IconButton>
            ) : (
              <div />
            )
          }
          title={product.name}
          subheader={`by ${product._id}`}
        />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleMenuClose}
        >
          <MenuItem onClick={() => this.props.editItem(product)}>
            {isTrading ? "Còn hàng" : "Đang giao dịch"}
          </MenuItem>
          <MenuItem onClick={() => this.props.removeItem(product._id)}>
            Xóa
          </MenuItem>
        </Menu>
        <CardMedia
          className={classes.media}
          image={product.img_link}
          title={product.name}
        />
        <CardContent>
          <Typography component="p">{product.type}</Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <Chip
            label={product.status}
            className={classes.chip}
            component="a"
            href="#chip"
            color={color}
          />
          <Chip
            label={`${product.price} VND`}
            className={classes.chip}
            component="a"
            href="#chip"
            color="secondary"
          />
        </CardActions>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);



