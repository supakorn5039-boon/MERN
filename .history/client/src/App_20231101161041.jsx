import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormProduct from "./components/FormProduct";
import FormEditProducts from "./components/FormEditProducts";

//Layout

import HeaderBar from "./layout/HeaderBar";
import SideBar from "./layout/SideBar";
import { CssBaseline, Box } from "@mui/material";
import TestRedux1 from "./components/TestRedux1";
import TestRedux2 from "./components/TestRedux2";

//Pages
import Register from "./components/pages/auth/Register";

function App() {
  return (
    <BrowserRouter>
      <>
        <CssBaseline />
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>

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
        {/* 
        <TestRedux1 />
        <hr />
        <TestRedux2 /> */}
      </>
    </BrowserRouter>
  );
}

export default App;
