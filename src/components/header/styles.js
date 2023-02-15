import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  border: 1px solid black;
  position: sticky;
  top: 0;
  background-color: white;
`;

export const HeaderItem = styled.div`
  display: flex;
  padding: 8px;
  font-size: 15px;
`;

export const HeaderItemLogout = styled(HeaderItem)`
  margin-left: auto;
  cursor: pointer;
`;

export const HeaderNavLink = styled(NavLink)`
  color: #363c47;
  text-decoration: none;
  &.active {
    color: "#000000";
    border-bottom: 2px solid #eb473e;
    text-decoration: none;
  }
  &:hover {
    color: #000000;
    border-bottom: 2px solid #eb473e;
    text-decoration: none;
  }
`;
