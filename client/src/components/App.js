import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import Home from "./Home";
import Dashboard from "./Dashboard";
import SurveyNew from "./Surveys/SurveyNew";

import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Header>
            <HeaderComponent />
          </Header>
          <Content>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/surveys" component={Dashboard} />
              <Route path="/surveys/new" component={SurveyNew} />
            </Switch>
          </Content>
          <Footer>
            <FooterComponent />
          </Footer>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
