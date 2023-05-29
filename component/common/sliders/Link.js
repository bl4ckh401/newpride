import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Link = ({ href, children, ...rest }) => {
  return (
    <ScrollLink
      to={href}
      smooth={true}
      duration={500}
      spy={true}
      exact="true"
      offset={-80}
      {...rest}
    >
      {children}
    </ScrollLink>
  );
};

export default Link;