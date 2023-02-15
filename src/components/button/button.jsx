import styled from "styled-components";

const Button = ({ children, ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

export const ButtonStyled = styled.button`
  display: flex;
  padding: 10px;
  border-radius: 10px;
  width: fit-content;
  cursor: pointer;
  border: none;
  background-color: #eb473e;
  font-size: 15px;
  color: white;
  :hover {
    background-color: #e1342a;
  }
`;

export default Button;
