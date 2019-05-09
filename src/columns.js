const columns = [
  {
    id: "entityName",
    numeric: false,
    disablePadding: true,
    label: "ASSET NAME"
  },
  {
    id: "entityType",
    numeric: false,
    disablePadding: false,
    label: "TYPE"
  },
  {
    id: "entityState",
    numeric: false,
    disablePadding: false,
    label: "STATUS"
  },
  {
    id: "alertCount",
    numeric: true,
    disablePadding: false,
    label: "TOTAL # OF ALERTS"
  },
  {
    id: "highAlertCount",
    numeric: true,
    disablePadding: false,
    label: "# OF HIGH ALERTS"
  },
  {
    id: "mediumAlertCount",
    numeric: true,
    disablePadding: false,
    label: "# OF MEDIUM ALERTS"
  },
  {
    id: "lowAlertCount",
    numeric: true,
    disablePadding: false,
    label: "# OF LOW ALERTS"
  }
];

export default columns;
