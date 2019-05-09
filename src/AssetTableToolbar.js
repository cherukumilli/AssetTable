import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit
  },
  spacer: {
    flex: "1 1 100%"
  },
  title: {
    flex: "0 0 auto"
  }
});

function AssetTableToolbar(props) {
  const { classes } = props;

  return (
    <Toolbar className={classNames(classes.root)}>
      <div className={classes.title}>
        <Typography variant="h6" id="tableTitle">
          Assets with alerts
        </Typography>
      </div>
      <div className={classes.spacer} />
    </Toolbar>
  );
}

AssetTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(toolbarStyles)(AssetTableToolbar);
