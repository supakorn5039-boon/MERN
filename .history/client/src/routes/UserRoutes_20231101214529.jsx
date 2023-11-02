import { useSelector } from "react-redux";
export default function UserRoutes({ children }) {
  const { user } = useSelector((state) => ({ ...state }));
  console.log("UserRoute", user);

  //check

  return children;
}
