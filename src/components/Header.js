import React from "react";
import PropTypes from "prop-types";
import "../components/Header.css";

const Header = (props) => (
  <nav className=" header navbar navbar-dark bg-dark">
    <div className="container">
      <div className="row m-auto">
        <div className="h1 ml-2 my-auto text-light" href="/">
          {props.title}
        </div>
      </div>
    </div>
  </nav>
);

Header.defaultProps = {
  title: "Title",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
