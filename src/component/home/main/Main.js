import React from 'react'
import ProfileState from './profile_state/ProfileState'
import './main.scss'

class Main extends React.Component {
  render() {
    return (
      <div id="mainWrap">
        <ProfileState />
        <div id="contentsWrap">
          <div className="content">
            <div className="contentHeader">
              <div className="myProfileArea">
                <img src={require("../../images/my_profile.jpg")} alt="my profile"/>
              </div>
              <div className="nameArea">
                <p>jinwoo0000000</p>
                <p>클래식햄버거</p>
              </div>
            </div>
            <div className="contentImages">
              <div className="imageArea">
                <img src={require("../../images/zzangu1.jpg")} alt="짱구"/>
              </div>
              <div className="contentWrap">
                
              </div>
            </div>
            <div className="contentComment">

              <div className="commentArea">
                <input type="text" placeholder="댓글 달기..." />
                <button>게시</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;