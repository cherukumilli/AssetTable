import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const styles = theme => ({
  type: {
    color: "#4a5b65"
  },
  status: {
    textTransform: "capitalize"
  },
  online: {
    color: "#66b022"
  },
  notOnline: {
    color: "#9b9b96",
    fontStyle: "italic"
  },
  alertCount: {
    color: "#1989fa"
  },
  highAlertCount: {
    color: "#d0021b"
  },
  mediumAlertCount: {
    color: "#ff9e49"
  },
  lowAlertCount: {
    color: "#fdc200"
  }
});

function AssetTableBody(props) {
  const { page, rowsPerPage, data, classes } = props;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  return (
    <TableBody>
      {data
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map(n => {
          const statusClassname =
            n.entityState.toLowerCase() === "online"
              ? `${classes.status} ${classes.online}`
              : `${classes.status} ${classes.notOnline}`;

          return (
            <TableRow hover role="row" tabIndex={-1} key={n.entityId}>
              <TableCell padding="none">{n.entityName}</TableCell>
              <TableCell align="left" className={classes.type}>
                {n.entityType}
              </TableCell>
              <TableCell align="left" className={statusClassname}>
                {n.entityState}
              </TableCell>
              <TableCell align="right" className={classes.alertCount}>
                {n.alertCount}
              </TableCell>
              <TableCell align="right" className={classes.highAlertCount}>
                {n.highAlertCount}
              </TableCell>
              <TableCell align="right" className={classes.mediumAlertCount}>
                {n.mediumAlertCount}
              </TableCell>
              <TableCell align="right" className={classes.lowAlertCount}>
                {n.lowAlertCount}
              </TableCell>
            </TableRow>
          );
        })}
      {emptyRows > 0 && (
        <TableRow style={{ height: 49 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
}

AssetTableBody.propTypes = {
  data: PropTypes.array.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired
};

export default withStyles(styles)(AssetTableBody);
