import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormProduct from "./components/FormProduct";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Form CRUD</h1>
        <FormProduct />
      </div>
    </BrowserRouter>
  );
}

export default App;
