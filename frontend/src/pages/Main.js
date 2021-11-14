/* eslint-disable */
import React, { useEffect, useState, Component } from "react";
import useStateRef from "react-usestateref";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import InnerHTML from "dangerously-set-html-content";
import Axios from "axios";
import Pagination from "./Pagination.js";
import $ from "jquery";
import JSAlert from "js-alert";
//react-router-dom@5.0.0
import {
  BrowserRouter as Router,
  Route,
  Switch,
  link,
  useHistory,
  withRouter,
  useParams
} from "react-router-dom";
window.$ = $;

history.pushState(null, document.title, location.href);
history.back();
history.forward();
window.onpopstate = function () {
  history.go(1);
};

function Main_Page() {
  return (
    <div className="App">
      <Helmet>
        <script
          async="true"
          src="http://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        />
      </Helmet>
      <div></div>
    </div>
  );
}

export default withRouter(Main_Page);
