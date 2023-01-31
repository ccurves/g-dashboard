import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Activate from "./pages/Activate";
import { isAuth } from "./helpers/auth";
import ResetPassowrd from "./pages/ResetPassowrd";
import Error404 from "./pages/Error404";
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isAuth() ? <UserDashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={isAuth() ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/activate/:token"
            element={isAuth() ? <Navigate to="/" /> : <Activate />}
          />
          <Route
            path="/reset/:token"
            element={isAuth() ? <Navigate to="/" /> : <ResetPassowrd />}
          />
          <Route
            path="/admin-panel"
            element={
              isAuth() && isAuth().isAdmin ? (
                <AdminDashboard />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
