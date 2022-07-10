import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "./ThemeContext";

import styles from "./Header.scss";

import Button from "./Button";

function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext);
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
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
