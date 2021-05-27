// SurveyFormReview show users their form input for review
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

import { Button, Col, Typography } from "antd";
import { SendOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, (field) => {
    return (
      <Col span={12} offset={6} key={field.name}>
        <Text>{field.label}</Text>
        <br />
        <Text type="secondary">{formValues[field.name]}</Text>
        <hr />
      </Col>
    );
  });

  return (
    <div>
      <Title level={2}>Please confirm your entries</Title>
      <div style={{ textAlign: "left" }}>{reviewFields}</div>

      <Col span={12} offset={6}>
        <Button style={{ float: "left" }} onClick={onCancel} danger>
          Back
        </Button>
        <Button
          style={{ float: "right" }}
          type="primary"
          onClick={() => submitSurvey(formValues, history)}
        >
          Send Survey <SendOutlined />
        </Button>
      </Col>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
