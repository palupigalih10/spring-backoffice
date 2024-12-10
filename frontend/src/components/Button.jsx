import React from "react";
import { CButton } from "@coreui/react";
import PropTypes from "prop-types";

const Button = ({ icon, children, ...props }) => {
  console.log({
    icon: icon,
    children: children,
    props: props,
  });

  return (
    <CButton className="d-flex" {...props}>
      {icon ? <span className="me-2">{icon}</span> : ""}
      {children}
    </CButton>
  );
};

Button.propTypes = {
  icon: PropTypes.instanceOf(React.Component),
};

export default Button;
