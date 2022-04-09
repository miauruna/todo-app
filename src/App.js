import { Route, Routes } from "react-router-dom";
import LoginPage from "./Components/Pages/Login/LoginPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
