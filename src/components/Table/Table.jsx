import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import "./Table.css";
const AntdTable = (props) => {
  return (
    <div>
      <Table columns={props.columns} dataSource={props?.dataSource} />
    </div>
  );
};

export default AntdTable;
