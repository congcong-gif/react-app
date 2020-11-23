import React from "react";
import Menu from "./menu";
import Header from "./header";
import "../css/reset.css"
import "../css/common.css"


function Frame(props) {
    console.log(props);
  return (
    <div>
      <Header></Header>
      <Menu></Menu>
      <div id="main">
            {props.children}
      </div>
    </div>
  );
}

export default Frame;
