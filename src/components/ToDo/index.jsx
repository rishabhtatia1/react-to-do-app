import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "../context/AuthContext";
import Header from "../header";
import Login from "../Login";

import "./index.css";

export default function ToDO() {
  return (
    <div className="TodoApp">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
