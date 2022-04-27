import React, { Component } from "react";
import tim4 from "../../components/img/pp-4.jpg";
import FooterAdmin from "../../components/Footer/FooterAdmin";
import HeaderAdmin from "../../components/Header/HeaderAdmin";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Profile.css";
import "../../views/views.css";

export default class Profile extends Component {
  render() {
    return (
      <div className="box">
        <Sidebar />
        <div className="content">
          <HeaderAdmin />
          <div className="row ml-xl-5 py-xl-5 overflow-auto">
            <div id="main-content">
              <div className="col-lg-11  table-responsive bg-light shadow pb-3  mb-5">
                <div className="text1 pt-2 px-2 d-flex">
                  <h4>Edit Profile</h4>
                  {/* <button class="btn btn-outline-dark shadow my-2 mt-3  ml-auto">
              <i class="fa-solid fa-circle-plus"></i>&nbsp; add post
            </button> */}
                </div>
                <div className="profile">
                  <div className="profile-img" align="middle">
                    <img
                      src={tim4}
                      alt=""
                      style={{
                        width: "250px",
                        padding: "20px 10px 10px 10px",
                        borderRadius: "50%",
                      }}
                    />
                    <br />
                    <div align="middle">
                      <p>
                        <strong>E-Commerce Bina Nusantara</strong>
                        <br />
                        <strong>smkbinusasmg@yahoo.com</strong>
                      </p>
                    </div>
                  </div>
                  <div className="profile-form pt-3">
                    <div className="mb-3 hi">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        Nama Toko:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Nama Toko:"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        Alamat:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Alamat"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        Deskripsi:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Deskripsi;"
                      />
                    </div>
                    <div align="middle">
                      <button type="button" class="btn btn-outline-success">
                        Simpan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="futer">
            <FooterAdmin />
          </div>
        </div>
      </div>
    );
  }
}
