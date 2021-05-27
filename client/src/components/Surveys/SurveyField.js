// SurveyField constains logic to render a single
// label and text input
import React from "react";
import { Input } from "antd";

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <>
      <h3 style={{ float: "left", marginBottom: 5 }}>{label}</h3>
      <Input {...input} />
      <label style={{ float: "left", color: "red"}}>
        {touched && error}
      </label>
    </>
  );
};
