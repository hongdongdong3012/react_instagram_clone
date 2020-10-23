import React from 'react';
import './home.scss';
import Header from './header/Header';
import Main from './main/Main';
import Aside from './aside/Aside';

class Home extends React.Component {
  render() {
    return (
      <div id="homeWrap">
        <Header />
        <section className="homeSection">
          <div className="container">
            <Main />
            <Aside />
          </div>
        </section>
      </div>
    )
  }
}

export default Home;