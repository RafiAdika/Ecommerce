import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "./pages.css";
import Sidebar from "../components/Sidebar/Sidebar";
import HeaderAdmin from "../components/Header/HeaderAdmin";
import FooterAdmin from "../components/Footer/FooterAdmin";
import "../views/views.css";

export default class Admin extends Component {
  render() {
    return (
      <div className="box">
        <Sidebar />
        <div className="content">
          <HeaderAdmin />

          {/* <FooterAdmin /> */}
        </div>
      </div>
    );
  }
}
