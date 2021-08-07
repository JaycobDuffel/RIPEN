import { useContext } from "react";
import AuthContext from "./context";


export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logout = () => {
    setUser(null);
  };

  const login = () => {
      setUser({
          firstName: 'Jaycob',
          email: 'fake@useremail.com'
      });
  };

  return { login, logout, user, setUser };
};