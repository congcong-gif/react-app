import React from "react";
import Tab from "../../common/component/tab";
import Acticle from "./article"

export default function Main(props) {
  let { data } = props;
  return (
    <div className="workDetails">
      <Tab
        data={data.image_path ? data.image_path.map((item) => item.path) : []}
        render={(src) => {
          return <img src={src}></img>;
        }}
      ></Tab>
      <div className="miiaov_box">
          <Acticle data={data}></Acticle>
      </div>
    </div>
  );
}
