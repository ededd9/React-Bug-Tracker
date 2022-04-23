import MainPage from "./pages/mainPage/mainPage";
import LoginPage from "./pages/loginPage/loginPage";
import AddTicketPage from "./pages/addTicketPage/addTicketPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./components/sideBar/sideBar";
function App() {
  return (
    <Router>
      <SideBar />
      <Routes>
        <Route path="/home" element={<MainPage />}></Route>
        <Route path="createTicket" element={<AddTicketPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
