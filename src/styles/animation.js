import { css, keyframes } from "styled-components";

const fadeInKeyframes = keyframes`
  from{
    filter: blur(5px);
    opacity: 0;
  }
  to{
    filter: blur(0);
    opacity: 1;
  }
  `;
const appearFromTopKeyframes = (
  posFrom,
  postTo,
  scaleFrom = 0.5,
  scaleTo = 0.5
) =>
  keyframes`
    from{
      transform: translateY(${posFrom}) scale(${scaleFrom});
    }
    to{
      transform: translateY(${postTo} scale(${scaleTo})) ;
    }
  `;
export const fadeIn = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `;
export const fromTo = ({
  time = "500ms",
  type = "ease-in-out",
  from = "-100%",
  to = "0%",
} = {}) =>
  css`
    animation: ${time} ${appearFromTopKeyframes(from, to)} ${type} forwards;
  `;
