import React, { useContext } from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "../../contexts/ThemeContext";

import Button from "../Button";
import Title from "../Title";

function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext);
  return (
    <>
      <Title>{title}</Title>
      {children}
      <Button onClick={onToggleTheme}>Mudar tema</Button>
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
