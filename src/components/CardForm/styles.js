import styled, { css } from "styled-components";

export const Card = styled.div`
  position: absolute;
  box-sizing: border-box;
  padding: 0px 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.5s linear;
  background-color: white;
  backface-visibility: hidden;
  ${(props) =>
    props.back &&
    css`
     transform: rotateY(180deg); */
  `}
  ${(props) =>
    props.front &&
    css`
     transform: rotateY(0deg); */
  `}
`;
export const Figure = styled.figure`
  width: 80%;
  margin: 0 auto;
  position: relative;
`;
export const Image = styled.img`
  width: 70%;
  height: 100%;
  max-width: 300px;
  margin: 0 auto;
  display: block;
`;
export const Figcaption = styled.figcaption`
  position: absolute;
  bottom: 0;
`;
export const Form = styled.form`
  width: 80%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: 1.5px solid #d7dbdd;
  height: 35px;
  border-radius: 7px;
  max-width: 300px;
  padding-left: 8px;
  /* &::placeholder{
    padding-left: 8px;
  } */
  &[disabled] {
    opacity: 0.3;
  }
`;
export const Text = styled.p`
  font-size: 0.9rem;
  text-align: center;
`;
export const ButtonR = styled.button`
  color: #3498db;
  font-weight: bold;
  text-decoration: none;
`;
export const Error = styled.span`
  font-size: 14px;
  color: red;
`;
