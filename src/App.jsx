import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Guest from "./sections/Guest";
import Login from "./sections/Login";
import Admin from "./adminSections/Admin";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(true);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login-admin" />;
  };
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Guest />} />

        {/* Login Route */}
        <Route
          path="/login-admin"
          element={<Login setCurrentUser={setCurrentUser} />}
        />

        {/* Protected Route */}
        <Route
          path="/authenticated"
          element={
            <RequireAuth>
              <Admin />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
