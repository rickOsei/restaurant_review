import Home from "./components/Home";
import Reviews from "./components/Reviews";
import Register from "./components/Register";
import Login from "./components/Login";
import { CreateReview } from "./components/CreateReview";
import ProtectedRoute from "./components/ProtectedRoute";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/reviews"
          element={
            <ProtectedRoute>
              <Reviews />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/form"
          element={
            <ProtectedRoute>
              <CreateReview />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
