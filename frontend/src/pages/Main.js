/* eslint-disable */
import React, { useEffect, useState, Component } from "react";
import useStateRef from "react-usestateref";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import InnerHTML from "dangerously-set-html-content";
import Axios from "axios";
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
  const [fromDate, setfromDate] = useState("");
  const [toDate, settoDate] = useState("");
  const [Fund_Detail, setFund_Detail] = useState([]);
  const FundBlock = async () => {
    const { data } = await Axios.get("https://putthiwat-finnomena.herokuapp.com/api/funds");
    setFund_Detail(data);
  };

  window.onload = function () {
    FundBlock();
  };

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

        <script src="vendor/jquery/jquery-3.2.1.min.js" />
        <script src="vendor/bootstrap/js/popper.js" />
        <script src="vendor/bootstrap/js/bootstrap.min.js" />
        <script src="vendor/select2/select2.min.js" />
        <script src="vendor/perfect-scrollbar/perfect-scrollbar.min.js" />
        <script src="js/main.js" />
      </Helmet>

      <div class="container">
        <br />
        <br />
        <div class="topleft">
          <label for="fromD">From:</label>
          <input
            type="date"
            id="fromD"
            onChange={(s) => {
              setfromDate(s.target.value);
            }}
          />
        </div>
        <div class="topright">
          <label for="toD">To:</label>
          <input
            type="date"
            id="toD"
            onChange={(s) => {
              settoDate(s.target.value);
            }}
          />
        </div>
        <br />
        <br />
        <div class="table100 ver1">
          <div class="table100-head">
            <table>
              <thead>
                <tr class="row100 head">
                  <th class="cell100 column1">Rank of fund</th>
                  <th class="cell100 column2">Name</th>
                  <th class="cell100 column3">Updated date</th>
                  <th class="cell100 column4">Performance</th>
                  <th class="cell100 column5">Price</th>
                </tr>
              </thead>
            </table>
          </div>

          <div class="table100-body js-pscroll">
            <table>
              {Fund_Detail.filter((val) => {
                if (fromDate == "" && toDate == "") {
                  return val;
                }
                if (
                  (new Date(val.nav_date)).getTime() >= (new Date(fromDate)).getTime() &&
                  toDate == ""
                ) {
                  return val;
                }
                if (
                  fromDate == "" &&
                  (new Date(val.nav_date)).getTime() <= (new Date(toDate)).getTime()
                ) {
                  return val;
                }
                if (
                  (new Date(val.nav_date)).getTime() >= (new Date(fromDate)).getTime() &&
                  (new Date(val.nav_date)).getTime() <= (new Date(toDate)).getTime()
                ) {
                  return val;
                }
              })
                .sort((a, b) => (a.nav_return < b.nav_return ? 1 : -1))
                .map((val, key) => {
                  let color = key % 2 === 0 ? "white" : "#f8f6ff";
                  return (
                    <tbody>
                      <tr class="row100 body">
                        <td
                          style={{ backgroundColor: color }}
                          class="cell100 column1"
                        >
                          {key + 1}
                        </td>
                        <td
                          style={{ backgroundColor: color }}
                          class="cell100 column2"
                        >
                          {val.thailand_fund_code}
                        </td>
                        <td
                          style={{ backgroundColor: color }}
                          class="cell100 column3"
                        >
                          {val.nav_date}
                        </td>
                        <td
                          style={{ backgroundColor: color }}
                          class="cell100 column4"
                        >
                          {val.nav_return}
                        </td>
                        <td
                          style={{ backgroundColor: color }}
                          class="cell100 column5"
                        >
                          {val.nav}
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
            </table>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default withRouter(Main_Page);
