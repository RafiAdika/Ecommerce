import React, { Component } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import HeaderAdmin from "../../components/Header/HeaderAdmin";
import FooterAdmin from "../../components/Footer/FooterAdmin";
// import Navbar from "../components/Navbar";
import "../../views/views.css";
import pro1 from "../../components/img/product-1.jpg";
import pro2 from "../../components/img/product-2.jpg";
import pro3 from "../../components/img/product-3.jpg";
import pro4 from "../../components/img/product-4.jpg";
import pro5 from "../../components/img/product-5.jpg";
import "./Product.css"

export default class ProductAdmin extends Component {
  render() {
    return (
      <div className="box">
        <Sidebar />
        <div className="content">
          <HeaderAdmin />
          {/* Page Header Start  */}
          {/* <div
          className="container-fluid  mb-5"
          style={{ backgroundColor: "rgb(5, 104, 107)" }}
        >
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: "300px" }}
          >
            <h1 className="font-weight-semi-bold text-uppercase mb-3">
              Shopping Cart
            </h1>
            <div className="d-inline-flex">
              <p className="m-0">
                <a href="/" style={{ color: "rgb(36, 166, 170)" }}>
                  Home
                </a>
              </p>
              <p className="m-0 px-2">-</p>
              <p className="m-0">Shopping Cart</p>
            </div>
          </div>
        </div>
        Page Header End  */}

          {/* Cart Start  */}
          <div class="row ml-xl-5 py-xl-5 overflow-auto">
            <div id="main-content">
              <div class="col-lg-11  table-responsive bg-light shadow pb-3  mb-5">
                <div class="text pt-2 px-2 d-flex">
                  <h4 class="mt-4">Our Product</h4>
                  {/* <button class="btn btn-outline-dark shadow my-2 mt-3  ml-auto">
                  <i class="fa-solid fa-circle-plus"></i>&nbsp; add post
                </button> */}
                </div>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Products</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Detail</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody className="align-middle">
                    <tr>
                      <th scope="row">1</th>
                      <td className="align-middle">
                        <img src={pro1} alt="" style={{ width: "50px" }} />
                      </td>
                      <td className="align-middle">Colorful Stylish Shirt</td>
                      <td className="align-middle">$150</td>
                      <td className="align-middle">
                        Volup erat ipsum diam elitr rebum et dolor. Est nonumy
                        elitr erat diam stet sit clita ea. Sanc invidunt ipsum
                        et, labore clita lorem magna lorem ut. Erat lorem duo
                        dolor no sea nonumy. Accus labore stet, est lorem sit
                        diam sea et justo, amet at lorem et eirmod ipsum diam et
                        rebum kasd rebum.
                      </td>
                      <td className="align-middle">
                        <button type="button" class="btn btn-outline-success">
                          <i class="fa-solid fa-check"></i>
                        </button>{" "}
                        <button type="button" class="btn btn-outline-danger">
                          <i class="fa-solid fa-x"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td className="align-middle">
                        <img src={pro2} alt="" style={{ width: "50px" }} />
                      </td>
                      <td className="align-middle">Colorful Stylish Shirt</td>
                      <td className="align-middle">$150</td>
                      <td className="align-middle">
                        Volup erat ipsum diam elitr rebum et dolor. Est nonumy
                        elitr erat diam stet sit clita ea. Sanc invidunt ipsum
                        et, labore clita lorem magna lorem ut. Erat lorem duo
                        dolor no sea nonumy. Accus labore stet, est lorem sit
                        diam sea et justo, amet at lorem et eirmod ipsum diam et
                        rebum kasd rebum.
                      </td>
                      <td className="align-middle">
                        <button type="button" class="btn btn-outline-success">
                          <i class="fa-solid fa-check"></i>
                        </button>{" "}
                        <button type="button" class="btn btn-outline-danger">
                          <i class="fa-solid fa-x"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td className="align-middle">
                        <img src={pro3} alt="" style={{ width: "50px" }} />
                      </td>
                      <td className="align-middle">Colorful Stylish Shirt</td>
                      <td className="align-middle">$150</td>
                      <td className="align-middle">
                        Volup erat ipsum diam elitr rebum et dolor. Est nonumy
                        elitr erat diam stet sit clita ea. Sanc invidunt ipsum
                        et, labore clita lorem magna lorem ut. Erat lorem duo
                        dolor no sea nonumy. Accus labore stet, est lorem sit
                        diam sea et justo, amet at lorem et eirmod ipsum diam et
                        rebum kasd rebum.
                      </td>
                      <td className="align-middle">
                        <button type="button" class="btn btn-outline-success">
                          <i class="fa-solid fa-check"></i>
                        </button>{" "}
                        <button type="button" class="btn btn-outline-danger">
                          <i class="fa-solid fa-x"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td className="align-middle">
                        <img src={pro4} alt="" style={{ width: "50px" }} />
                      </td>
                      <td className="align-middle">Colorful Stylish Shirt</td>
                      <td className="align-middle">$150</td>
                      <td className="align-middle">
                        Volup erat ipsum diam elitr rebum et dolor. Est nonumy
                        elitr erat diam stet sit clita ea. Sanc invidunt ipsum
                        et, labore clita lorem magna lorem ut. Erat lorem duo
                        dolor no sea nonumy. Accus labore stet, est lorem sit
                        diam sea et justo, amet at lorem et eirmod ipsum diam et
                        rebum kasd rebum.
                      </td>
                      <td className="align-middle">
                        <button type="button" class="btn btn-outline-success">
                          <i class="fa-solid fa-check"></i>
                        </button>{" "}
                        <button type="button" class="btn btn-outline-danger">
                          <i class="fa-solid fa-x"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td className="align-middle">
                        <img src={pro5} alt="" style={{ width: "50px" }} />
                      </td>
                      <td className="align-middle">Colorful Stylish Shirt</td>
                      <td className="align-middle">$150</td>
                      <td className="align-middle">
                        Volup erat ipsum diam elitr rebum et dolor. Est nonumy
                        elitr erat diam stet sit clita ea. Sanc invidunt ipsum
                        et, labore clita lorem magna lorem ut. Erat lorem duo
                        dolor no sea nonumy. Accus labore stet, est lorem sit
                        diam sea et justo, amet at lorem et eirmod ipsum diam et
                        rebum kasd rebum.
                      </td>
                      <td className="align-middle">
                        <button type="button" class="btn btn-outline-success">
                          <i class="fa-solid fa-check"></i>
                        </button>{" "}
                        <button type="button" class="btn btn-outline-danger">
                          <i class="fa-solid fa-x"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="futer">
            <FooterAdmin />
          </div>
        </div>
        {/* Cart End  */}
      </div>
    );
  }
}
