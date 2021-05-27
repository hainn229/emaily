// SurveyForm show a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Button, Form, Col } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends Component {
  renderField() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <>
          <Col span={12} offset={6}>
            <Field
              component={SurveyField}
              type="text"
              label={label}
              name={name}
              key={name}
            />
          </Col>
          <br />
        </>
      );
    });
  }
  render() {
    return (
      <div>
        <Form
          onFinish={this.props.handleSubmit(() => this.props.onSurveySubmit())}
        >
          {this.renderField()}
          <Col span={12} offset={6}>
            <Button
              style={{ float: "left" }}
              onClick={() => (window.location.href = "/surveys")}
              type="primary"
              danger
            >
              Cancel
            </Button>
            <Button
              style={{ float: "right" }}
              type="primary"
              htmlType="submit"
            >
              Next <CheckOutlined />
            </Button>
          </Col>
        </Form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a value of ${name}`;
    }
  });
  return errors;
};
export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
