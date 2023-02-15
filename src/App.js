import "./styles.js";
import { Outlet } from "react-router-dom";
import { AppWrapper } from "./styles.js";
import Header from "./components/header/header.jsx";

function App() {
  return (
    <AppWrapper className="App">
      <Header />
      <Outlet />
    </AppWrapper>
  );
}

export default App;
