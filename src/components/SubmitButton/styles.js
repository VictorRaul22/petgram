import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  max-width: 280px;
  height: 38px;
  text-align: center;
  color: white;
  background-color: #a569bd;
  border-radius: 8px;
  font-size: 0.9rem;
  &[disabled] {
    opacity: 0.3;
  }
`;
