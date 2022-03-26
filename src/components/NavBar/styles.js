import styled from "styled-components";
import { NavLink as LinkRouter } from "react-router-dom";
import { fadeIn } from "../../styles/animation";

export const Nav = styled.nav`
  align-items: center;
  background-color: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  width: 100%;
  z-index: 1000;
`;
export const Link = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  &[aria-current] {
    color: #000;
    &:after {
      ${fadeIn({ time: ".5s" })}
      content: '.';
      position: absolute;
      bottom: 10px;
      font-size: 32px;
      line-height: 20px;
    }
  }
`;
