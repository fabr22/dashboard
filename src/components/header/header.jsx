import { useNavigate } from "react-router";
import { useAuthContext } from "../../hooks/useAuth";
import {
  HeaderWrapper,
  HeaderItem,
  HeaderNavLink,
  HeaderItemLogout,
} from "./styles";

const Header = () => {
  const { signout } = useAuthContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    signout();
    navigate("login");
  };

  return (
    <HeaderWrapper>
      <HeaderItem>
        <HeaderNavLink to="home">Home</HeaderNavLink>
      </HeaderItem>
      <HeaderItem>
        <HeaderNavLink to="list">List</HeaderNavLink>
      </HeaderItem>
      <HeaderItem>
        <HeaderNavLink to="settings">Settings</HeaderNavLink>
      </HeaderItem>
      <HeaderItemLogout onClick={handleLogout}>Logout</HeaderItemLogout>
    </HeaderWrapper>
  );
};

export default Header;
