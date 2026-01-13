import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import type { RootState } from "../app/store";

import { useNavigate } from "react-router-dom";
import { Button, TextField, Card } from "@radix-ui/themes";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state: RootState) => state.auth.error);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(login({ email, password }));
    navigate("/home");
  };

  return (
    <Card style={{ maxWidth: 400, margin: "100px auto", padding: 20 }}>
      <h2>Healthcare Admin Login</h2>

      <TextField.Root
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <TextField.Root
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <Button onClick={handleLogin}>Login</Button>
    </Card>
  );
};

export default Login;
