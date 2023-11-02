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
import HomePageAdmin from "./components/pages/admin/HOmePageAdmin";
import HomePageUser from "./components/pages/user/HomePageUser";

function App() {
  return (
    <BrowserRouter>
      <>
        <CssBaseline />

        <HomePageAdmin />
        {/* Public Page */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* User */}
          <Route path="/user/index" element={<HomePageUser />} />
        </Routes>

        {/* Admin Page */}
        <div className="app">
          <SideBar />
          <main className="content">
            <HeaderBar />
            <div className="content_body">
              <Box m="20px">
                <Routes>
                  <Route path="/admin/viewtable" element={<FormProduct />} />
                  <Route path="/edit/:id" element={<FormEditProducts />} />
                </Routes>
              </Box>
            </div>
          </main>
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
