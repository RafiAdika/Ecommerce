import React from "react";
import "../components.css";

export default function HeaderAdmin() {
  // function closeNav() {
  //   document.getElementById("sidebar").style.width = "250px";
  //   document.getElementById("sidebar").style.marginLeft = "0";
  // }
  return (
    <div className="hdr-adm">
      <div className=" py-1 px-xl-4 justify-content-between d-flex">
        <div className="hdr-left ">
          <a href="#" className="list">
            <i class="fa-solid fa-bars"></i>
          </a>
        </div>
        <div className="hdr-right pl-xl-5ml-xl-5">
          <div className="user ">
            <i class="fa-solid fa-circle-user"></i>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
