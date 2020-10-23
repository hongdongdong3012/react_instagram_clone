import React from 'react'
import './header.scss'

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <h1 class="logo">
            <img src={require("../../images/logo.svg")} alt="logo"/>
          </h1>
          <div className="searchWrap">
            <input type="text" placeholder="검색" />
          </div>
          <ul className="functionWrap">
            <li>
              <a href="/" >1</a>
            </li>
            <li>
              <a href="/" >2</a>
            </li>
            <li>
              <a href="/" >3</a>
            </li>
            <li>
              <a href="/" >4</a>
            </li>
            <li>
              <a href="/" >
              <img src={require("../../images/my_profile.jpg")} alt="my profile"/>
              </a>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Header;