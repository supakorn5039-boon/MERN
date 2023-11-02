import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormProduct from "./components/FormProduct";
import FormEditProducts from "./components/FormEditProducts";

//Layout

import HeaderBar from "./layout/HeaderBar";
import SideBar from "./layout/SideBar";
import { CssBaseline, Box } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<FormProduct />} />
          <Route path="/edit/:id" element={<FormEditProducts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
