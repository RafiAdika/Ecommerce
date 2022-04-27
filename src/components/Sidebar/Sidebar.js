import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  // function openNav() {
  //   document.getElementById("sidebar").style.width = "0";
  //   document.getElementById("sidebar").style.marginLeft = "-350px";
  // }
  return (
    <div className="sidebar">
      <nav id="sidebar">
        <div className="sidebar-header">
          <p style={{ padding: "5px" }} className="d-flex" href="/home">
            <h3>User Management</h3>
            {/* <i className="fa-solid fa-x "></i> */}
          </p>
        </div>

        <ul className="list-unstyled components ">
          <li>
            <a href="/dashboard">
              <i className="fa-solid fa-gauge"></i>&nbsp;&nbsp;Dashboard
            </a>
          </li>

          <li>
            <a href="/productadmin">
              <i className="fa-solid fa-circle-user"></i>&nbsp;&nbsp;Product
            </a>
          </li>

          <li>
            <a href="/contactadmin">
              <i className="fa-solid fa-address-book"></i>&nbsp;&nbsp;Contact
            </a>
          </li>

          <li>
            <a href="/aboutadmin">
              <i className="fa-solid fa-calendar-check"></i>&nbsp;&nbsp;About
            </a>
          </li>

          <li>
            <a href="/profile">
              <i className="fa-solid fa-calendar-check"></i>
              &nbsp;&nbsp;Profile
            </a>
          </li>

          <li>
            <a href="/blogadmin">
              <i className="fa-solid fa-blog"></i>&nbsp;&nbsp;Blog
            </a>
          </li>

          <li>
            <a href="/" className="out">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              &nbsp;&nbsp;Keluar
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
