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
        <title>Putthiwat's Finnomena</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="icon"
          type="image/png"
          href="resources/images/icons/favicon.ico"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="resources/vendor/bootstrap/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="resources/fonts/font-awesome-4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="resources/vendor/animate/animate.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="resources/vendor/select2/select2.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="resources/vendor/perfect-scrollbar/perfect-scrollbar.css"
        />
        <link rel="stylesheet" type="text/css" href="resources/css/util.css" />
        <link rel="stylesheet" type="text/css" href="resources/css/main.css" />

        <script
          async="true"
          src="http://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        />
        <script src="vendor/jquery/jquery-3.2.1.min.js" />
        <script src="vendor/bootstrap/js/popper.js" />
        <script src="vendor/bootstrap/js/bootstrap.min.js" />
        <script src="vendor/select2/select2.min.js" />
        <script src="vendor/perfect-scrollbar/perfect-scrollbar.min.js" />
        <script src="js/main.js" />
      </Helmet>

      <div class="container spacer">
        <br />
        <br />
        <br />
        <div class="table100 ver1 m-b-110">
          <div class="table100-head">
            <table>
              <thead>
                <tr class="row100 head">
                  <th class="cell100 column1">Name</th>
                  <th class="cell100 column2">Rank of fund</th>
                  <th class="cell100 column3">Updated date</th>
                  <th class="cell100 column4">Performance</th>
                  <th class="cell100 column5">Price</th>
                </tr>
              </thead>
            </table>
          </div>

          <div class="table100-body js-pscroll">
            <table>
              <tbody>
                <tr class="row100 body">
                  <td class="cell100 column1">thailand_fund_code</td>
                  <td class="cell100 column2">nav_return_rank</td>
                  <td class="cell100 column3">nav_date</td>
                  <td class="cell100 column4">nav_return</td>
                  <td class="cell100 column5">nav</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Main_Page);
