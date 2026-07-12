import {
  createContext,
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";

import { getToken, removeToken, saveToken } from "../utils/token";
import { loginUser } from "../services/authService";

type User = {
  email: string;
} | null;

type AuthContextType = {
  user: User;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getToken();

    if (token) {
      setUser({
        email: "Logged User",
      });
    }

    setLoading(false);
  }, []);

  const login = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      const data = await loginUser({
        email,
        password,
      });

      if (data.success) {
        saveToken(data.token);

        setUser({
          email,
        });

        return true;
      }

      return false;
    } catch {
      return false;
    }
  };

  const logout = () => {
    removeToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;