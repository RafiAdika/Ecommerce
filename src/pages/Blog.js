import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "./pages.css";

export default class Blog extends Component {
  render() {
    return (
      <div className="all">
        <Navbar />

        {/* Page Header Start  */}
        <div
          className="container-fluid  mb-5"
          style={{ backgroundColor: "rgb(145, 210, 212)" }}
        >
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: "300px" }}
          >
            <h1 className="font-weight-semi-bold text-uppercase mb-3">Blog</h1>
            <div className="d-inline-flex">
              <p className="m-0">
                <a href="/" style={{ color: "rgb(5, 138, 143" }}>
                  Home
                </a>
              </p>
              <p className="m-0 px-2">-</p>
              <p className="m-0">Checkout</p>
            </div>
          </div>
        </div>
        {/* Page Header End  */}

        {/* Checkout Start  */}
        <div className="container-fluid pt-5">
          <div className="row px-xl-5">
            <div className="col-lg-8">
              <div className="mb-4">
                <h3 className="font-weight-semi-bold mb-4">Gift Set</h3>
                <div className="row">
                  <div className="col-md-6 mb-5 form-group">
                    <div className="card  md-5">
                      <div className="img">
                        <p
                          className="md-5 pt-2 pl-2 pb-2 mt-4 mr-5 label"
                          // style={{ marginRight: "153px" }}
                        >
                          <b> OCTOBER 21, 2021</b>
                        </p>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title">
                          {/* <b>Cream Blush, Gift Set</b> */}
                          Cream Blush, Gift Set
                        </h6>
                        <p className="card-text">
                          Gift Set Cream Blush from Coco & Eve
                        </p>
                        <br />
                        <div className="d-flex ">
                          <p>
                            <i className="fa fa-circle-user"></i>&nbsp;admin
                          </p>
                          &nbsp;&nbsp;&nbsp;
                          <p>
                            <i className="fa fa-comments-o"></i>&nbsp;1 comment
                          </p>
                        </div>
                        <hr />
                        <button className="btn btn-dark ">
                          <a href="/blog">
                            Read More&nbsp;
                            <i className="fas fa-arrow-right"> </i>
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-5 form-group">
                    <div className="card border--5">
                      <div className="img">
                        <p
                          className="md-5 pt-2 pl-2 pb-2 mt-4 mr-5 label"
                          // style={{ marginRight: "153px" }}
                        >
                          <b> OCTOBER 21, 2021</b>
                        </p>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title">
                          {/* <b>Cream Blush, Gift Set</b> */}
                          Cream Blush, Gift Set
                        </h6>
                        <p className="card-text">
                          Gift Set Cream Blush from Coco & Eve
                        </p>
                        <br />
                        <div className="d-flex ">
                          <p>
                            <i className="fa fa-circle-user"></i>&nbsp;admin
                          </p>
                          &nbsp;&nbsp;&nbsp;
                          <p>
                            <i className="fa fa-comments-o"></i>&nbsp;1 comment
                          </p>
                        </div>
                        <hr />
                        <button className="btn btn-dark ">
                          <a href="/blog">
                            Read More&nbsp;
                            <i className="fas fa-arrow-right"> </i>
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-5 form-group">
                    <div className="card border--5">
                      <div className="img">
                        <p
                          className="md-5 pt-2 pl-2 pb-2 mt-4 mr-5 label"
                          // style={{ marginRight: "153px" }}
                        >
                          <b> OCTOBER 21, 2021</b>
                        </p>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title">
                          {/* <b>Cream Blush, Gift Set</b> */}
                          Cream Blush, Gift Set
                        </h6>
                        <p className="card-text">
                          Gift Set Cream Blush from Coco & Eve
                        </p>
                        <br />
                        <div className="d-flex ">
                          <p>
                            <i className="fa fa-circle-user"></i>&nbsp;admin
                          </p>
                          &nbsp;&nbsp;&nbsp;
                          <p>
                            <i className="fa fa-comments-o"></i>&nbsp;1 comment
                          </p>
                        </div>
                        <hr />
                        <button className="btn btn-dark ">
                          <a href="/blog">
                            Read More&nbsp;
                            <i className="fas fa-arrow-right"> </i>
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-5 form-group">
                    <div className="card border--5">
                      <div className="img">
                        <p
                          className="md-5 pt-2 pl-2 pb-2 mt-4 mr-5 label"
                          // style={{ marginRight: "153px" }}
                        >
                          <b> OCTOBER 21, 2021</b>
                        </p>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title">
                          {/* <b>Cream Blush, Gift Set</b> */}
                          Cream Blush, Gift Set
                        </h6>
                        <p className="card-text">
                          Gift Set Cream Blush from Coco & Eve
                        </p>
                        <br />
                        <div className="d-flex ">
                          <p>
                            <i className="fa fa-circle-user"></i>&nbsp;admin
                          </p>
                          &nbsp;&nbsp;&nbsp;
                          <p>
                            <i className="fa fa-comments-o"></i>&nbsp;1 comment
                          </p>
                        </div>
                        <hr />
                        <button className="btn btn-dark ">
                          <a href="/blog">
                            Read More&nbsp;
                            <i className="fas fa-arrow-right"> </i>
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-5 form-group">
                    <div className="card border--5">
                      <div className="img">
                        <p
                          className="md-5 pt-2 pl-2 pb-2 mt-4 mr-5 label"
                          // style={{ marginRight: "153px" }}
                        >
                          <b> OCTOBER 21, 2021</b>
                        </p>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title">
                          {/* <b>Cream Blush, Gift Set</b> */}
                          Cream Blush, Gift Set
                        </h6>
                        <p className="card-text">
                          Gift Set Cream Blush from Coco & Eve
                        </p>
                        <br />
                        <div className="d-flex ">
                          <p>
                            <i className="fa fa-circle-user"></i>&nbsp;admin
                          </p>
                          &nbsp;&nbsp;&nbsp;
                          <p>
                            <i className="fa fa-comments-o"></i>&nbsp;1 comment
                          </p>
                        </div>
                        <hr />
                        <button className="btn btn-dark ">
                          <a href="/blog">
                            Read More&nbsp;
                            <i className="fas fa-arrow-right"> </i>
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-5 form-group">
                    <div className="card border--5">
                      <div className="img">
                        <p
                          className="md-5 pt-2 pl-2 pb-2 mt-4 mr-5 label"
                          // style={{ marginRight: "153px" }}
                        >
                          <b> OCTOBER 21, 2021</b>
                        </p>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title">
                          {/* <b>Cream Blush, Gift Set</b> */}
                          Cream Blush, Gift Set
                        </h6>
                        <p className="card-text">
                          Gift Set Cream Blush from Coco & Eve
                        </p>
                        <br />
                        <div className="d-flex ">
                          <p>
                            <i className="fa fa-circle-user"></i>&nbsp;admin
                          </p>
                          &nbsp;&nbsp;&nbsp;
                          <p>
                            <i className="fa fa-comments-o"></i>&nbsp;1 comment
                          </p>
                        </div>
                        <hr />
                        <button className="btn btn-dark ">
                          <a href="/blog">
                            Read More&nbsp;
                            <i className="fas fa-arrow-right"> </i>
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-5 form-group">
                    <div className="card border--5">
                      <div className="img">
                        <p
                          className="md-5 pt-2 pl-2 pb-2 mt-4 mr-5 label"
                          // style={{ marginRight: "153px" }}
                        >
                          <b> OCTOBER 21, 2021</b>
                        </p>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title">
                          {/* <b>Cream Blush, Gift Set</b> */}
                          Cream Blush, Gift Set
                        </h6>
                        <p className="card-text">
                          Gift Set Cream Blush from Coco & Eve
                        </p>
                        <br />
                        <div className="d-flex ">
                          <p>
                            <i className="fa fa-circle-user"></i>&nbsp;admin
                          </p>
                          &nbsp;&nbsp;&nbsp;
                          <p>
                            <i className="fa fa-comments-o"></i>&nbsp;1 comment
                          </p>
                        </div>
                        <hr />
                        <button className="btn btn-dark ">
                          <a href="/blog">
                            Read More&nbsp;
                            <i className="fas fa-arrow-right"> </i>
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-5 form-group">
                    <div className="card border--5">
                      <div className="img">
                        <p
                          className="md-5 pt-2 pl-2 pb-2 mt-4 mr-5 label"
                          // style={{ marginRight: "153px" }}
                        >
                          <b> OCTOBER 21, 2021</b>
                        </p>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title">
                          {/* <b>Cream Blush, Gift Set</b> */}
                          Cream Blush, Gift Set
                        </h6>
                        <p className="card-text">
                          Gift Set Cream Blush from Coco & Eve
                        </p>
                        <br />
                        <div className="d-flex ">
                          <p>
                            <i className="fa fa-circle-user"></i>&nbsp;admin
                          </p>
                          &nbsp;&nbsp;&nbsp;
                          <p>
                            <i className="fa fa-comments-o"></i>&nbsp;1 comment
                          </p>
                        </div>
                        <hr />
                        <button className="btn btn-dark ">
                          <a href="/blog">
                            Read More&nbsp;
                            <i className="fas fa-arrow-right"> </i>
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-5 form-group">
                    <div className="card border--5">
                      <div className="img">
                        <p
                          className="md-5 pt-2 pl-2 pb-2 mt-4 mr-5 label"
                          // style={{ marginRight: "153px" }}
                        >
                          <b> OCTOBER 21, 2021</b>
                        </p>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title">
                          {/* <b>Cream Blush, Gift Set</b> */}
                          Cream Blush, Gift Set
                        </h6>
                        <p className="card-text">
                          Gift Set Cream Blush from Coco & Eve
                        </p>
                        <br />
                        <div className="d-flex ">
                          <p>
                            <i className="fa fa-circle-user"></i>&nbsp;admin
                          </p>
                          &nbsp;&nbsp;&nbsp;
                          <p>
                            <i className="fa fa-comments-o"></i>&nbsp;1 comment
                          </p>
                        </div>
                        <hr />
                        <button className="btn btn-dark ">
                          <a href="/blog">
                            Read More&nbsp;
                            <i className="fas fa-arrow-right"> </i>
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-5 form-group">
                    <div className="card border--5">
                      <div className="img">
                        <p
                          className="md-5 pt-2 pl-2 pb-2 mt-4 mr-5 label"
                          // style={{ marginRight: "153px" }}
                        >
                          <b> OCTOBER 21, 2021</b>
                        </p>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title">
                          {/* <b>Cream Blush, Gift Set</b> */}
                          Cream Blush, Gift Set
                        </h6>
                        <p className="card-text">
                          Gift Set Cream Blush from Coco & Eve
                        </p>
                        <br />
                        <div className="d-flex ">
                          <p>
                            <i className="fa fa-circle-user"></i>&nbsp;admin
                          </p>
                          &nbsp;&nbsp;&nbsp;
                          <p>
                            <i className="fa fa-comments-o"></i>&nbsp;1 comment
                          </p>
                        </div>
                        <hr />
                        <button className="btn btn-dark ">
                          <a href="/blog">
                            Read More&nbsp;
                            <i className="fas fa-arrow-right"> </i>
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-5 form-group">
                    <div className="card border--5">
                      <div className="img">
                        <p
                          className="md-5 pt-2 pl-2 pb-2 mt-4 mr-5 label"
                          // style={{ marginRight: "153px" }}
                        >
                          <b> OCTOBER 21, 2021</b>
                        </p>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title">
                          {/* <b>Cream Blush, Gift Set</b> */}
                          Cream Blush, Gift Set
                        </h6>
                        <p className="card-text">
                          Gift Set Cream Blush from Coco & Eve
                        </p>
                        <br />
                        <div className="d-flex ">
                          <p>
                            <i className="fa fa-circle-user"></i>&nbsp;admin
                          </p>
                          &nbsp;&nbsp;&nbsp;
                          <p>
                            <i className="fa fa-comments-o"></i>&nbsp;1 comment
                          </p>
                        </div>
                        <hr />
                        <button className="btn btn-dark ">
                          <a href="/blog">
                            Read More&nbsp;
                            <i className="fas fa-arrow-right"> </i>
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-5 form-group">
                    <div className="card border--5">
                      <div className="img">
                        <p
                          className="md-5 pt-2 pl-2 pb-2 mt-4 mr-5 label"
                          // style={{ marginRight: "153px" }}
                        >
                          <b> OCTOBER 21, 2021</b>
                        </p>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title">
                          {/* <b>Cream Blush, Gift Set</b> */}
                          Cream Blush, Gift Set
                        </h6>
                        <p className="card-text">
                          Gift Set Cream Blush from Coco & Eve
                        </p>
                        <br />
                        <div className="d-flex ">
                          <p>
                            <i className="fa fa-circle-user"></i>&nbsp;admin
                          </p>
                          &nbsp;&nbsp;&nbsp;
                          <p>
                            <i className="fa fa-comments-o"></i>&nbsp;1 comment
                          </p>
                        </div>
                        <hr />
                        <button className="btn btn-dark ">
                          <a href="/blog">
                            Read More&nbsp;
                            <i className="fas fa-arrow-right"> </i>
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="card  mb-5"
                style={{ borderColor: "rgb(5, 138, 143)" }}
              >
                <div
                  className="card-header  border-0"
                  style={{ backgroundColor: "rgb(5, 138, 143)" }}
                >
                  <h4 className="font-weight-semi-bold text-light m-0">
                    Search
                  </h4>
                </div>
                <div className="card-body">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for products"
                    />
                    <div className="input-group-append">
                      <span
                        className="input-group-text text-light "
                        style={{ backgroundColor: "rgb(5, 138, 143)" }}
                      >
                        <i className="fa fa-search"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card  mb-5"
                style={{ borderColor: "rgb(5, 138, 143)" }}
              >
                <div
                  className="card-header  border-0"
                  style={{ backgroundColor: "rgb(5, 138, 143)" }}
                >
                  <h4 className="font-weight-semi-bold text-light m-0">
                    Categories
                  </h4>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <div className="custom-control">
                      <ul>
                        <li className="mb-3">Cream Blush (3)</li>
                        <li className="mb-3">Gift Set (8)</li>
                        <li className="mb-3">Hair & body (3)</li>
                        <li className="mb-3">make Up (4)</li>
                        <li className="mb-3">Nail & Wax (3)</li>
                        <li className="mb-3">Skin Care (6)</li>
                        <li className="mb-3">Sun CAre (5)</li>
                        <li className="mb-3">Tips (3)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Checkout End  */}
      </div>
    );
  }
}
