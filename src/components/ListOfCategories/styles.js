import styled, { css } from "styled-components";

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  ${(props) =>
    props.fixed &&
    css`
      position: fixed;
      background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      left: 0;
      margin: 0 auto;
      max-width: 4000px;
      padding: 5px;
      right: 0;
      top: -20px;
      z-index: 1;
      transform: translateY(-300%) scale(0.5);
      transition: transform 400ms ease-in-out 50ms;
    `}
  ${(props) =>
    props.translate &&
    css`
      transform: translateY(0%) scale(0.5);
    `}
`;
export const Item = styled.li`
  padding: 0 8px;
`;
