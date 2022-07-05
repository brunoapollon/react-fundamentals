import React from "react";
import PropTypes from "prop-types";

function Header({ title, children }) {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
}

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: `JStack's blog`,
};
