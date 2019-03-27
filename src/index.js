import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import search from "./data";

import RecommendationDeciderApp from "./app";

const links = search.data;

ReactDOM.render(
  <RecommendationDeciderApp links={links} />,
  document.getElementById("app")
);
