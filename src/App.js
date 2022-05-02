import MainPage from "./pages/mainPage/mainPage";
import LoginPage from "./pages/loginPage/loginPage";
import StatsPage from "./pages/statsPage/statsPage";
import AddTicketPage from "./pages/addTicketPage/addTicketPage";
import SingleTicketPage from "./pages/singleTicketPage/singleTicketPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./components/sideBar/sideBar";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<StatsPage />}></Route>
        <Route path="/home" element={<MainPage />}></Route>
        <Route path="createTicket" element={<AddTicketPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="ticket/:ticketId" element={<SingleTicketPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
