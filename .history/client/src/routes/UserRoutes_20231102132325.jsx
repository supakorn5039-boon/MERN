import { useSelector } from "react-redux";
import ResponsiveAppBar from "../layout/ResponsiveAppBar";
import NotFound404 from "../components/pages/NotFound404";
export default function UserRoutes({ children }) {
  const { user } = useSelector((state) => ({ ...state }));
  console.log("UserRoute", user);

  //check
  // if user and user have token (?) mean true show children (:) else show No Login
  return user && user.user.token ? (
    <>
      <ResponsiveAppBar />

      {children}
    </>
  ) : (
    <NotFound404 />
  );
}
