import React from "react";
import BScroll from "better-scroll";

export default function Tab(props) {
  // console.log(props);
  let {data,render} = props
  return (
    <div className="banner">
      <div className="banner_img">
        <ul className="banner_list clearfix">
          {data.map((item, index) => {
            return <li key={index}>{render(item)}</li>;
          })}
        </ul>
        <ul className="banner_nav">
            {
                data.map((item,index)=>{
                    return <li key={index}></li>
                })
            }
        </ul>
      </div>
    </div>
  );
}