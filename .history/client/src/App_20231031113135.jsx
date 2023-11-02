import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormProduct from "./components/FormProduct";
import FormEditProducts from "./components/FormEditProducts";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Form CRUD</h1>
        <Routes>
          <Route path="/" element={<FormProduct />} />
          <Route path="/edit" element={<FormEditProducts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
