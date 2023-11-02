import { useSelector } from "react-redux";
export default function UserRoutes({ children }) {
  const { user } = useSelector((state) => ({ ...state }));
  console.log("UserRoute", user);

  //check

  return user && user.user.token ? children : <h1>No Login</h1>;
}
