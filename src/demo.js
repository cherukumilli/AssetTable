import React from "react";
import AssetTable from "./AssetTable";
import columns from "./columns";
import createSampleData from "./createSampleData";

function AssetTableContainer(props) {
  const data = createSampleData();
  return <AssetTable columns={columns} data={data} />;
}

AssetTableContainer.propTypes = {};

export default AssetTableContainer;
