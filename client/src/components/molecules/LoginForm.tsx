import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import { useLoginMutation } from "../../api/endpoints/auth";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/slices/authSlice";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [login, { isLoading, error }] = useLoginMutation();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await login({ email, password });
      console.log("API Response:", response);
      const token = await login({ email, password }).unwrap();
      dispatch(setToken(token));
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <form className="space-y-4">
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button label="Se connecter" onClick={handleLogin} className="w-full" />
      {isLoading && <p>Chargement...</p>}
      {error && <p>Email ou mot de passe incorrect</p>}
      <Text className="text-sm mt-4 text-center">
        Mot de passe oublié?{" "}
        <span className="text-blue-500 cursor-pointer">Réinitialiser</span>
      </Text>
    </form>
  );
};

export default LoginForm;
