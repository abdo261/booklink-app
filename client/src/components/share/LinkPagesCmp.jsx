


import { NavLink } from "react-router-dom";

const LinkPagesComp = ({ className, text, id, href, icon }) => {

  return (
    <NavLink className={`${className}`} id={id} to={href}>
      {icon} {text}
    </NavLink>
  );
};

export default LinkPagesComp;
