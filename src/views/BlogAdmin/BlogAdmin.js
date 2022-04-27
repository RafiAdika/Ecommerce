import React, { Component } from "react";
import FooterAdmin from "../../components/Footer/FooterAdmin";
import HeaderAdmin from "../../components/Header/HeaderAdmin";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./BlogAdmin.css";
import pro1 from "../../components/img/FB1.jpg";

export default class BlogAdmin extends Component {
  render() {
    return (
      <div className="box">
        <Sidebar />
        <div className="content">
          <HeaderAdmin />
          <div className="blog">
            <div class="row ml-xl-5 py-xl-5 overflow-auto">
              <div id="main-content">
                <div class="col-lg-11 table-responsive bg-light shadow pb-3 mb-5">
                  <div class="text pt-2 px-2 d-flex">
                    <h4 class="mt-4">Our Blog</h4>
                    <button class="btn btn-outline-dark shadow my-2 mt-3  ml-auto">
                      <i class="fa-solid fa-circle-plus"></i>&nbsp; add post
                    </button>
                  </div>
                  <hr />
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th>Products</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Detail</th>
                        <th>Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody class="align-middle">
                      <tr>
                        <td class="align-middle">1</td>
                        <td class="align-middle">
                          <img src={pro1} alt="" style={{ width: " 70px" }} />
                        </td>
                        <td class="align-middle">Skincare</td>
                        <td class="align-middle">$18.00</td>
                        <td class="align-middle td">
                          Volup erat ipsum diam elitr rebum et dolor. Est nonumy
                          elitr erat diam stet sit clita ea. Sanc invidunt ipsum
                          et, labore clita lorem magna lorem ut. Erat lorem duo
                          dolor no sea nonumy. Accus labore stet, est lorem sit
                          diam sea et justo, amet at lorem et eirmod ipsum diam
                          et rebum kasd rebum.
                        </td>
                        <td class="align-middle">October 21, 2022</td>
                        <td class="align-middle">
                          <button class="btn btn-sm btn-outline-danger mb-2">
                            <i class="fa-solid fa-xmark"></i>&nbsp;Remove
                          </button>
                          &nbsp;
                          <button class="btn btn-sm btn-outline-info">
                            <i class="fa-solid fa-pen-to-square"></i>&nbsp;Edit
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="align-middle">1</td>
                        <td class="align-middle">
                          <img src={pro1} alt="" style={{ width: " 70px" }} />
                        </td>
                        <td class="align-middle">Skincare</td>
                        <td class="align-middle">$18.00</td>
                        <td class="align-middle td">
                          Volup erat ipsum diam elitr rebum et dolor. Est nonumy
                          elitr erat diam stet sit clita ea. Sanc invidunt ipsum
                          et, labore clita lorem magna lorem ut. Erat lorem duo
                          dolor no sea nonumy. Accus labore stet, est lorem sit
                          diam sea et justo, amet at lorem et eirmod ipsum diam
                          et rebum kasd rebum.
                        </td>
                        <td class="align-middle">October 21, 2022</td>
                        <td class="align-middle">
                          <button class="btn btn-sm btn-outline-danger mb-2">
                            <i class="fa-solid fa-xmark"></i>&nbsp;Remove
                          </button>
                          &nbsp;
                          <button class="btn btn-sm btn-outline-info">
                            <i class="fa-solid fa-pen-to-square"></i>&nbsp;Edit
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>{" "}
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
