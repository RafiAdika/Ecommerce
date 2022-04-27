import React, { Component } from "react";
import FooterAdmin from "../../components/Footer/FooterAdmin";
import HeaderAdmin from "../../components/Header/HeaderAdmin";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Contact.css";

export default class ContactAdmin extends Component {
  render() {
    return (
      <div className="box">
        <Sidebar />
        <div className="content">
          <HeaderAdmin />
          <div class="row ml-xl-5 py-xl-5 overflow-auto">
            <div id="main-content">
              <div class="col-lg-11  table-responsive bg-light shadow pb-3  mb-5">
                <div class="text pt-2 px-2 d-flex">
                  <h4 class="mt-4">Our Contact</h4>
                  {/* <button class="btn btn-outline-dark shadow my-2 mt-3  ml-auto">
                  <i class="fa-solid fa-circle-plus"></i>&nbsp; add post
                </button> */}
                </div>
                <hr />
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Maps:
                  </label>
                  <input
                    type="url"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="URL"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Alamat:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Jl.blablabla,No 0"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    No. Telp:
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>
                <button type="button" class="btn btn-secondary">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="futer">
            <FooterAdmin />
          </div>
        </div>
      </div>
    );
  }
}
