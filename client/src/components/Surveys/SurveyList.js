import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";
import { List, Col } from "antd";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  renderSurveys() {
    return this.props.surveys.map((survey) => {
      return (
        <>
          <List.Item>
            <List.Item.Meta
              style={{ backgroundColor: "white", padding: 10}}
              key={survey._id}
              title={<h2>{survey.title}</h2>}
              description={
                <>
                  <h3>{survey.body}</h3>
                  <p>
                    Sent on: {new Date(survey.dateSent).toLocaleDateString()}
                  </p>
                  <div>
                    <a>Yes: {survey.yes}</a>
                    <a style={{ marginLeft: 20 }}>No: {survey.no}</a>
                  </div>
                </>
              }
            />
          </List.Item>
        </>
      );
    });
  }
  render() {
    return (
      <>
        <Col span={12} offset={6} style={{ textAlign: "left" }}>
          <h1>Survey List</h1>
          <List itemLayout="horizontal">{this.renderSurveys()}</List>
        </Col>
      </>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys: surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
