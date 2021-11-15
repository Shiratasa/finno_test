/* eslint-disable */
import React, { Component, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  link,
  useHistory,
  withRouter,
  useParams
} from "react-router-dom";

import Main_Page from "./pages/Main.js";

function App() {
  return (
    <div className="App">
      <Helmet>
        <script
          async="true"
          src="http://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        />
      </Helmet>
      <Router>
        <Switch>
          <Route path="/" exact component={Main_Page} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
