import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormProduct from "./components/FormProduct";
import FormEditProducts from "./components/FormEditProducts";

//Layout

import { CssBaseline } from "@mui/material";

//Pages
import Register from "./components/pages/auth/Register";
import Login from "./components/pages/auth/Login";
import Line from "./components/pages/auth/Line";

//User
import HomePageUser from "./components/pages/user/HomePageUser";

//Admin
import HOmePageAdmin from "./components/pages/admin/HOmePageAdmin";
import ManageUser from "./components/pages/admin/ManageUser";

//Routes
import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";

//function
import { currentUser } from "./functions/auth";
import { useDispatch } from "react-redux";
import { login } from "./store/UserSlice";
import NotFound404 from "./components/pages/NotFound404";
import ResponsiveAppBar from "./layout/ResponsiveAppBar";

function App() {
  const dispatch = useDispatch();
  const idToken = localStorage.getItem("token");
  console.log("token", idToken);
  currentUser(idToken)
    .then((res) => {
      console.log(res);
      dispatch(
        login({
          name: res.data.name,
          role: res.data.role,
          token: idToken,
        })
      );
    })
    .catch((err) => console.log(err));

  return (
    <BrowserRouter>
      <>
        <CssBaseline />

        {/* Public Page */}

        <Routes>
          <Route
            path="*"
            element={
              <NotFound404 text="The page you’re looking for doesn’t exist." />
            }
          />
          <Route
            path="/"
            element={
              <>
                <ResponsiveAppBar />
                <h1>HomePage</h1>
              </>
            }
          />
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
            path="/admin/manage"
            element={
              <AdminRoutes>
                <ManageUser />
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
