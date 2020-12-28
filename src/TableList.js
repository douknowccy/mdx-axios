import React from "react";
import { Table } from "antd";
import { observer } from "mobx-react-lite";
import { useProductContext } from "./mobx/context";
const TableList = observer(() => {
  const pro = useProductContext();
  //   console.log(pro.product);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
  ];
  const data = pro.product.map((item) => {
    return { ...item, key: item.id };
  });
  console.log("render table list");
  return (
    <div>
      <h4>Middle size table</h4>
      <Table columns={columns} dataSource={data} size="middle" />
    </div>
  );
});
export default TableList;
