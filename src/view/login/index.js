import React from "react";
import "../../common/css/login.css"
import Login from "./login"

function index(props) {
  return (
    <div id="login_boxWrap">
      <h2 className="login_register">
        <span>登录&注册</span>
      </h2>
      <div className="login_register_box">
        <div className="box">
          <Login></Login>
        </div>
      </div>
    </div>
  );
}

export default index;
