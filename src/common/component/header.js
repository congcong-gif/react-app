import React from "react";
import http from "../../store/action/http";
import {Link} from "react-router-dom"

function Header() {
/*   http
    .post("/lecturer/lists?page=1&rows=20", {
      order: "desc",
      sort: "id",
      category_id: 1,
      recommend: 1,
    })
    .then((res) => {
      console.log("数据", res);
      return res.data;
    })
    .then((data) => {
      console.log(data);
    }); */

  return (
    <header id="header">
      <nav className="menu">
        <a>导航</a>
      </nav>
      <h1 className="logo">miaov.com</h1>
      <Link to={"/login"} className="user"></Link>
    </header>
  );
}

export default Header;