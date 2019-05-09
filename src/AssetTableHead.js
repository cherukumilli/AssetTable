import React from "react";
import PropTypes from "prop-types";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Tooltip from "@material-ui/core/Tooltip";

function AssetTableHead(props) {
  const createSortHandler = property => event => {
    props.onRequestSort(event, property);
  };

  const { order, orderBy } = props;

  return (
    <TableHead>
      <TableRow>
        {props.columns.map(row => (
          <TableCell
            key={row.id}
            align={row.numeric ? "right" : "left"}
            padding={row.disablePadding ? "none" : "default"}
            sortDirection={orderBy === row.id ? order : false}
          >
            <Tooltip
              title="Sort"
              placement={row.numeric ? "bottom-end" : "bottom-start"}
              enterDelay={300}
            >
              <TableSortLabel
                active={orderBy === row.id}
                direction={order}
                onClick={createSortHandler(row.id)}
              >
                {row.label}
              </TableSortLabel>
            </Tooltip>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

AssetTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

export default AssetTableHead;
