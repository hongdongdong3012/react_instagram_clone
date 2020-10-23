import React from 'react'
import './aside.scss'

class Aside extends React.Component {
  render() {
    return (
      <div id="asideWrap">
        <div className="myProfileWrap">
          <div className="myProfile">
            <img src={require("../../images/my_profile.jpg")} alt="my profile"/>
          </div>
          <div className="nameArea">
            <p>jinwoo0000000</p>
            <p>홍진우</p>
          </div>          
        </div>
        <div className="userRecommendWrap">
          <div className="recommendArea">
            <h3>회원님을 위한 추천</h3>
            <a href="/">모두보기</a>
          </div>
          {/* <div className="userArea">
            <div className="myProfile">
              <img src={require("../../images/my_profile.jpg")} alt="my profile"/>
            </div>
            <div className="nameArea">
              <p>jinwoo0000000</p>
              <p>홍진우</p>
            </div>          
          </div>           */}
        </div>
      </div>
    )
  }
}

export default Aside;