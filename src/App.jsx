import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Casino from "./pages/Casino";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/casino"
          element={
            <ProtectedRoute>
              <Casino />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}
