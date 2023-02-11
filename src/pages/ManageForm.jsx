import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import AntdTable from "../components/Table/Table";
import FormContext from "../context/FormContext";
const ManageForm = () => {
  const [PageSize, setPageSize] = useState(8);
  const [data, setData] = useState([]);
  const [paginateStatus, setPaginateStatus] = useState({
    current: 1,
    pageSize: PageSize,
  });
  const columns = [
    {
      title: "Surveyor",
      dataIndex: "surveyor",
      key: "surveyor",
      width: "16.66%",
      render: (text, record) => (
        <div className="flex flex-col items-start content-start">
          <span className="surveyorName">{record?.surveyor}</span>
          <span className="surveyorEmail">{record?.surveyoremail}</span>
        </div>
      ),
    },
    {
      title: "Form Link",
      width: "16.66%",
      render: (text, record) => (
        <Link to={record?.id} className="formLink">
          forms.sde/{record?.id}
        </Link>
      ),
    },
    {
      title: "Form Type",
      dataIndex: "formType",
      key: "formType",
      width: "16.66%",
      render: (text, record) => <span className="formType">{text}</span>,
    },
    {
      title: "Mobile Number",
      dataIndex: "mobileNumber",
      key: "mobileNumber",
      width: "16.66%",
      render: (text, record) => <span className="form">{text}</span>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: "16.66%",
      render: (text, record) => (
        <span className={`tablePill statusPill ${text} `}>{text}</span>
      ),
    },
    {
      title: "Action",
      width: "16.66%",
      render: (text, record) => (
        <span className="tableActionButton">
          <BiEdit />
        </span>
      ),
    },
  ];

  const { formList } = useContext(FormContext);
  useEffect(() => {
    setData(formList);
  }, []);

  return (
    <section className="manageFormWrapper">
      <div className="sectionHeaderWrapper flex items-center content-between">
        <h2 className="sectionHeaderTitle"> Manage Forms </h2>
        <div className="btn btn-primary">+ Create New Form</div>
      </div>
      <div className="sectionContentWrapper">
        <AntdTable
          columns={columns}
          dataSource={data}
          scroll={{
            x: "auto",
          }}
          pagination={{
            defaultCurrent: paginateStatus.current,
            pageSize: PageSize,
          }}
          onChange={(pagination, e) => {
            setPaginateStatus(pagination);
            setPageSize(pagination?.pageSize);
          }}
          sticky
        />
      </div>
    </section>
  );
};

export default ManageForm;
