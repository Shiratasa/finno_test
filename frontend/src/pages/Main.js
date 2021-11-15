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
  const [Fund_Detail, setFund_Detail] = useState([]);
  const FundBlock = async () => {
    const { data } = await Axios.get("/api/funds");
    setFund_Detail(data);
  };

  const [Current_Page1, setCurrent_Page1] = useState(1);
  const [Page_AllPost1, setPage_AllPost1] = useState(7);
  const LastQuery1 = Current_Page1 * Page_AllPost1;
  const FirstQuery1 = LastQuery1 - Page_AllPost1;
  const FundSlice = Fund_Detail.slice(FirstQuery1, LastQuery1);
  const FundCount = Math.ceil(Fund_Detail.length / Page_AllPost1);
  const paginate1 = (pageNum) => setCurrent_Page1(pageNum);

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

      <div class="container">
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
              {FundSlice.sort((a, b) =>
                a.nav_return < b.nav_return ? 1 : -1
              ).map((val, key) => {
                return (
                  <tbody>
                    <tr class="row100 body">
                      <td class="cell100 column1">{(key+1)+((Current_Page1-1)*7)}</td>
                      <td class="cell100 column2">{val.thailand_fund_code}</td>
                      <td class="cell100 column3">{val.nav_date}</td>
                      <td class="cell100 column4">{val.nav_return}</td>
                      <td class="cell100 column5">{val.nav}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>

        <br />
        <Pagination
          Page_AllPost={Page_AllPost1}
          TotalPost={Fund_Detail.length}
          Current_Page={Current_Page1}
          paginate={paginate1}
          PostCount={FundCount}
        />
        <br />
        <br />
      </div>
    </div>
  );
}

export default withRouter(Main_Page);
