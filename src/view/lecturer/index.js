import React, {Component} from "react";
import '../../common/css/teacher.css'
import axios from 'axios'
class  Lecturer   extends Component {
    constructor(props){
      super();
      this.state = {
         
      }
    }
   

    componentDidMount(){
      // const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
      axios.get('https://data.miaov.com/lecturer/lists?page=1&rows=100  ')
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
        
        
      })
    }
  render(){


    return <div>

    <div>
        <div className="teacher_banner">
             <h2><span>趣味团队</span></h2>
             <div className="teacher_photo_box">
                  <ul className="teacher_photo_list clearfix">
                    <li>
                        <figure className="teacher_message">
                                  <div>
                                      <img></img>
                                  </div>
                                  <figcaption></figcaption>
                        </figure>
                    </li>
                  </ul>
             </div>
        </div>
        <div className="teacher_index">
            <h2>加入我们</h2>
            <ul className="teacher_list clearfix">
               <li >
                  <div className="message_li">
                     <h3>web讲师</h3>
                     <p>人数：人数不限，多多益善</p>
                     <p>薪资：面议</p>
                  </div>
               </li>
               <li>
                  <div className="message_li">
                     <h3>课程顾问</h3>
                     <p>人数：3人</p>
                     <p>薪资：底薪+提成</p>
                  </div>
               </li>
               <li >
                  <div className="message_li">
                     <h3>客服</h3>
                     <p>人数：3人</p>
                     <p>薪资：面议</p>
                  </div>
               </li>
               <li >
                  <div className="message_li">
                     <h3>行政前台助理</h3>
                     <p>人数：3人</p>
                     <p>薪资：底薪+提成</p>
                  </div>
               </li>
            </ul>
            <div className="welcome clearfix">
               <div className="welcome_photo">
                    <img src={require('../../common/images/xiaole.png').default}></img>
               </div>
               <p>
                 欢迎大家来到妙味课堂，在这里，公司文化轻松包容，且呈多元化发展倾向，职位晋级标准清晰量化，虽有上下级职称、却无论资排辈陋习……
                  <span>本招聘信息长期有效</span>
               </p>
            </div>
        </div>

        <footer id="footer">
          <div className="link clearfix">
              <a href="#">hr_recruit@miaov.com</a>
              <a href="#">010-57269690</a>
          </div>
          <nav className="foot_nav clearfix">
              <a href="#">网站首页</a>
              <a href="#">课程安排</a>
              <a href="#">学员作品</a>
              <a href="#">视频教程</a>
              <a href="#">关于我们</a>
              <a href="#">在线留言</a>
              <a href="#">常见问题</a>
          </nav>
          <p className="copyright">京ICP备08102442号-1 2007-2016 MIAOOV.COM 版权所有</p>
  </footer>
    </div>

</div>;


  }
  
}

export default Lecturer;
