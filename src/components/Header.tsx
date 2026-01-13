import { Button } from "@radix-ui/themes";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { RootState } from "../app/store";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h2>Healthcare Admin</h2>
      <div>
        <span>{user}</span>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
};

export default Header;
