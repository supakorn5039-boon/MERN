import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormProduct from "./components/FormProduct";
import FormEditProducts from "./components/FormEditProducts";

//Layout

import HeaderBar from "./layout/HeaderBar";
import SideBar from "./layout/SideBar";
import { CssBaseline, Box } from "@mui/material";

//Pages
import Register from "./components/pages/auth/Register";
import Login from "./components/pages/auth/Login";

//User && Admin
import HOmePageAdmin from "./components/pages/admin/HOmePageAdmin";
import HomePageUser from "./components/pages/user/HomePageUser";
import AdminRoutes from "./routes/AdminRoutes";

function App() {
  return (
    <BrowserRouter>
      <>
        <CssBaseline />

        <HOmePageAdmin />
        {/* Public Page */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* User */}
          <Route path="/user/index" element={<HomePageUser />} />
        </Routes>

        {/* Admin Page */}
        <AdminRoutes></AdminRoutes>
      </>
    </BrowserRouter>
  );
}

export default App;
