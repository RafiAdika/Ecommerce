import React, { Component } from "react";
import "../../views/views.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import HeaderAdmin from "../../components/Header/HeaderAdmin";
import FooterAdmin from "../../components/Footer/FooterAdmin";
import Adm from "../../components/img/admin 1.jpg";
import "./Dashboard.css";

export default class HomeAdmin extends Component {
  render() {
    return (
      <div className="box">
        <Sidebar />
        <div className="content">
          <HeaderAdmin />
          <div id="main" align="middle">
            <img src={Adm} alt="Adm" style={{ width: "60%", height: "60%" }} />
            <h1>
              <marquee behavior="alternate" scrollamount="15">
                {" "}
                Selamat Datang Admin{" "}
              </marquee>
            </h1>
          </div>
          <div className="futer">
            <FooterAdmin />
          </div>
        </div>
      </div>
    );
  }
}
