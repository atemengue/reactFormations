import { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/AuthContext";

const ResolveAuthScreen = () => {
  const { TryLocalSignin } = useContext(AuthContext);
  useEffect(() => {
    TryLocalSignin();
  }, []);
  return null;
};

export default ResolveAuthScreen;
