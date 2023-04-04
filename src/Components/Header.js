import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return (
      <>
        {/* <!-- Page Preloder --> */}
        <div id="preloder">
          <div className="loader"></div>
        </div>

        {/* <!-- Header section --> */}
        <header className="header-section clearfix">
          <div className="container-fluid">
            <Link className="site-logo" to="/">
              <img src="img/logo.png" alt="" />
            </Link>
            <div className="responsive-bar">
              <i className="fa fa-bars"></i>
            </div>
            <a href="" className="user">
              <i className="fa fa-user"></i>
            </a>
            <Link className="site-btn" to="/">Sign Up Free</Link>
            <nav className="main-menu">
              <ul className="menu-list">
                <li>
                  <Link className="nav-link active" to="/">
                    Solution
                  </Link>
                </li>
                <li>
                  <Link className="nav-link active" to="/">
                    Features
                  </Link>
                </li>
                <li>
                  <Link className="nav-link active" to="/">
                    News
                  </Link>
                </li>
                <li>
                  <Link className="nav-link active" to="/">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="nav-link active" to="/">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {/* <!-- Header section end --> */}
      </>
    );
  }
}

export default Header;
