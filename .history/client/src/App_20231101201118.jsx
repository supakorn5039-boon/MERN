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

//User
import HomePageUser from "./components/pages/user/HomePageUser";

//Admin
import HOmePageAdmin from "./components/pages/admin/HOmePageAdmin";

//Routes
import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";

function App() {
  return (
    <BrowserRouter>
      <>
        <CssBaseline />

        {/* Public Page */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* User */}
          <Route
            path="/user/index"
            element={
              <UserRoutes>
                <HomePageUser />
              </UserRoutes>
            }
          />

          {/* Admin Page */}
          <Route
            path="/admin/index"
            element={
              <AdminRoutes>
                <HOmePageAdmin />
              </AdminRoutes>
            }
          />

          <Route
            path="/admin/viewtable"
            element={
              <AdminRoutes>
                <FormProduct />
              </AdminRoutes>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <AdminRoutes>
                <FormEditProducts />
              </AdminRoutes>
            }
          />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
