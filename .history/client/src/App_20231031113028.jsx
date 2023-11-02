import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormProduct from "./components/FormProduct";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Form CRUD</h1>
        <Routes>
          <Route path="/" element={FormProduct} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
