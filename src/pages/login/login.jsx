import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../../hooks/useAuth";

import Button from "../../components/button/button";
import Title from "../../components/title/title";
import { LoginWrapper, LoginDescription, LoginFormWrapper } from "./styles";

const Login = () => {
  const navigate = useNavigate();
  const { signin } = useAuthContext();
  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        handleSubmit(event);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    signin();
    navigate("/home");
  };

  return (
    <LoginWrapper>
      <LoginFormWrapper onSubmit={handleSubmit}>
        <Title>Login page</Title>
        <LoginDescription>
          Press enter button on keybord or click login button
        </LoginDescription>
        <Button type="submit">Login</Button>
      </LoginFormWrapper>
    </LoginWrapper>
  );
};

export default Login;
