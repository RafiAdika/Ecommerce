import React, { Component } from "react";
import HeaderAdmin from "../../components/Header/HeaderAdmin";
import Sidebar from "../../components/Sidebar/Sidebar";
import FooterAdmin from "../../components/Footer/FooterAdmin";
import "./About.css";

export default class AboutAdmin extends Component {
  render() {
    return (
      <div className="box">
        <Sidebar />
        <div className="content">
          <HeaderAdmin />
          <div className="row ml-xl-5 py-xl-5 overflow-auto">
            <div id="main-content">
              <div className="col-lg-11  table-responsive bg-light shadow pb-3  mb-5">
                <div className="text pt-2 px-2 d-flex">
                  <h4 className="mt-3">About</h4>
                  {/* <button class="btn btn-outline-dark shadow my-2 mt-3  ml-auto">
              <i class="fa-solid fa-circle-plus"></i>&nbsp; add post
            </button> */}
                </div>
                <hr />
                <div className="container-fluid pt-3">
                  <form>
                    <div className="form-group">
                      <label for="exampleFormControlInput1">
                        Email address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                      />
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlTextarea1">
                        Description:
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button
                          type="button"
                          className="btn btn-outline-success"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlSelect1">
                        Example select
                      </label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>Our Mission</option>
                        <option>Creative</option>
                        <option>Sustainability</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlTextarea1">
                        Example textarea
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlTextarea1">
                        Example textarea
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button
                          type="button"
                          className="btn btn-outline-success"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlSelect1">
                        Example select
                      </label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlTextarea1">
                        Example textarea
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button
                          type="button"
                          className="btn btn-outline-success"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
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
