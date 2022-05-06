import React from "react";
import { Helmet } from "react-helmet";
import PropType from "prop-types";
import { Div, Title, Subtitle } from "./styles";

function Layout({ children, title, subtitle }) {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Petgram </title>}
        {subtitle && <meta name="description" content={subtitle} />}
      </Helmet>
      <Div>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Div>
    </>
  );
}
Layout.propTypes = {
  children: PropType.node.isRequired,
  title: PropType.string,
  subtitle: PropType.string,
};

export default Layout;
