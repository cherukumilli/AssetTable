import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TablePagination from "@material-ui/core/TablePagination";
import AssetTableToolbar from "./AssetTableToolbar";
import AssetTableHead from "./AssetTableHead";
import AssetTableBody from "./AssetTableBody";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit,
    paddingLeft: theme.spacing.unit
  },
  table: {
    minWidth: 1020
  },
  tableWrapper: {
    overflowX: "auto"
  }
});

function AssetTable(props) {
  const [order, setOrder] = useState("desc");
  const [orderBy, setOrderBy] = useState("alertCount");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { classes, data = [], columns = [] } = props;

  const handleRequestSort = (event, property) => {
    const sortDirection =
      orderBy === property && order === "desc" ? "asc" : "desc";
    setOrder(sortDirection);
    setOrderBy(property);
  };

  const handleChangePage = (event, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value);
  };

  return (
    <>
      <AssetTableToolbar />
      <div className={classes.tableWrapper}>
        <Table className={classes.table} aria-labelledby="tableTitle">
          <AssetTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={data.length}
            columns={columns}
          />
          {/* <AssetTableFilter
            order={order}
            orderBy={orderBy}
            onSelectAllClick={this.handleSelectAllClick}
            onRequestSort={this.handleRequestSort}
            rowCount={data.length}
            columns={columns}
          /> */}
          <AssetTableBody data={data} page={page} rowsPerPage={rowsPerPage} />
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[10, 20, 50]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          "aria-label": "Previous Page"
        }}
        nextIconButtonProps={{
          "aria-label": "Next Page"
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
}

AssetTable.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
};

export default withStyles(styles)(AssetTable);
