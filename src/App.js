import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductAll from "./Pages/ProductAll";
// import ProductDetail from "./Pages/ProductDetail";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from "./Route/PrivateRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(false); // true 로그인, false 비로그인

  useEffect(() => {}, [authenticate]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
