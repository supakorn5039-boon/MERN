import { useSelector } from "react-redux";
export default function UserRoutes({ children }) {
  const { user } = useSelector((state) => ({ ...state }));
  console.log("UserRoute", user);

  //check
  // if user and user have token (?) mean true show children (:) else show No Login
  return user && user.user.token ? children : <h1>No Login</h1>;
}
