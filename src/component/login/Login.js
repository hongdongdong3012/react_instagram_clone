import React from 'react'
import './login.scss'

class Login extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div id="loginWrap">
            <h1 class="logo">
              <img src={require("../images/logo.svg")} alt="logo"/>
            </h1>
            <form className="loginForm">
              <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
              <input type="password" placeholder="비밀번호" />
              <button>로그인</button>
            </form>
            <div className="orWrap">
              <div className="line leftLine"></div>
              <div className="text">또는</div>
              <div className="line rightLine"></div>
            </div>
            <p className="loginToFacebook">Facebook으로 로그인</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Login