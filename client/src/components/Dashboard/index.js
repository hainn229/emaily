import React from "react";
import { Button } from "antd"; // Menu, Dropdown
import { PlusOutlined } from "@ant-design/icons";
import SurveyList from "../Surveys/SurveyList";

const Dashboard = () => {
  return (
    <div style={{ textAlign: "center", marginTop: 10, marginBottom: 50 }}>
      <Button
        type="primary"
        shape="circle"
        style={{ float: "right", marginRight: 100 }}
        onClick={() => (window.location.href = "/surveys/new")}
      >
        <PlusOutlined />
      </Button>
      <SurveyList />
    </div>
  );
};

export default Dashboard;

/* <Dropdown
  placement="topCenter"
  overlay={
    <div style={{ textAlign: "center" }}>
      <li>
        <a target="_blank" rel="noopener noreferrer" href="">
          3
        </a>
      </li>

      <li>
        <a target="_blank" rel="noopener noreferrer" href="">
          2
        </a>
      </li>

      <li>
        <a target="_blank" rel="noopener noreferrer" href="">
          1
        </a>
      </li>
    </div>
  }
></Dropdown> */
