import styled from "styled-components";

const Title = ({ children, ...props }) => {
  return <TitleStyled {...props}>{children}</TitleStyled>;
};

export const TitleStyled = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export default Title;
