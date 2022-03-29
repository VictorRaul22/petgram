import styled, { css } from "styled-components";

export const WraperUserForm = styled.div`
  /* position: relative; */
  /* perspective: 800px; */
`;
export const Cards = styled.div`
  transform-style: preserve-3d;
  transition: all 0.5s linear;
  width: 100%;

  ${(props) =>
    props.flip &&
    css`
      transform: rotateY(180deg);
    `}
`;
