import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "../Payments";

import { Button, Row, Col } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

class HeaderComponent extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return (
          <span style={{ float: "right", color: "white" }}>
            <LoadingOutlined /> Loading !
          </span>
        );
      case false:
        return (
          <span style={{ float: "right" }}>
            <Button type="primary" href={"/auth/google"} danger>
              Sign In With Google
            </Button>
          </span>
        );
      default:
        return (
          <span style={{ float: "right" }}>
            <Payments />{" "}
            <span style={{ color: "white", marginLeft: 10, marginRight: 10 }}>
              {this.props.auth.amount > 0 ? (
                <span>Credits: {this.props.auth.amount}</span>
              ) : (
                <span>Credit: {this.props.auth.amount}</span>
              )}
            </span>{" "}
            <Button type="primary" href={"/api/logout"} danger>
              Log out
            </Button>
          </span>
        );
    }
  }

  render() {
    return (
      <Row justify="center" align="top">
        <Col flex={1}>
          <Link to={this.props.auth ? "/surveys" : "/"}>
            <h1 style={{ color: "white" }}>Emaily</h1>
          </Link>
        </Col>
        <Col flex="auto">{this.renderContent()}</Col>
      </Row>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(HeaderComponent);
