import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddToDo from "../AddToDo";
import AuthProvider, { useAuth } from "../context/AuthContext";
import Error from "../Error";
import Footer from "../Footer";
import Header from "../Header";
import ListToDos from "../ListToDos";
import Login from "../Login";
import Logout from "../Logout";
import Welcome from "../Welcome";

import "./index.css";

function AuthenticatedRoute({ children }) {
  const authContext = useAuth();

  if (authContext.isAuthenticated) return children;

  return <Navigate to="/" />;
}
export default function ToDO() {
  return (
    <div className="TodoApp">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/welcome/:username"
              element={
                <AuthenticatedRoute>
                  <Welcome />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/todos"
              element={
                <AuthenticatedRoute>
                  <ListToDos />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/todo/:id"
              element={
                <AuthenticatedRoute>
                  <AddToDo />
                </AuthenticatedRoute>
              }
            />
            <Route path="/logout" element={<Logout />} />
            */
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
