import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import ProductService from "./../../services/ProductService";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 400,
    transform: "translateZ(0)"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});

class TitlebarGridList extends React.Component {
  state = {
    tileData: []
  };

  componentDidMount() {
    this.reloadData();
  }

  reloadData = async () => {
    let fetchedData = await ProductService.getAllProducts();
    this.setState({
      tileData: fetchedData.data
    });
    console.log(this.state.tileData);
  };

  render() {
    const { classes } = this.props;
    const { tileData } = this.state;
    return (
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={4} style={{ height: "auto" }}>
            <ListSubheader component="div">Bài đăng</ListSubheader>
          </GridListTile>
          {tileData.map(tile => (
            <GridListTile key={tile._id}>
              <img src={tile.img_Link} alt={tile.name} />
              <GridListTileBar
                title={tile.name}
                subtitle={<span>by: {tile.user._id}</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TitlebarGridList);
