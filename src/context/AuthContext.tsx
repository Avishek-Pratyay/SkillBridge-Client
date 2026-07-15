import {
  createContext,
  useState,
} from "react";
import type { ReactNode } from "react";

import { removeToken, saveToken } from "../utils/token";
import { loginUser } from "../services/authService";

export type User = {
  name: string;
  email: string;
  photoURL: string;
  role: "student" | "instructor";
  subscription: boolean;
} | null;

type AuthContextType = {
  user: User;
  loading: boolean;
  login: (
    email: string,
    password: string
  ) => Promise<boolean>;
  googleLogin:(data: any)=>void;
  logout: () => void;
};

export const AuthContext =
  createContext<AuthContextType>(
    {} as AuthContextType
  );

const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] =
    useState<User>(null);

  const [loading] =
    useState(false);

  const login = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      const data = await loginUser({
        email,
        password,
      });

      if (!data.success) {
        return false;
      }

      saveToken(data.token);

setUser({
  name: data.user.name,
  email: data.user.email,
  photoURL: data.user.photoURL,
  role: data.user.role,
  subscription: data.user.subscription,
});

      return true;
    } catch {
      return false;
    }
  };
  const googleLogin = (data: any) => {

  saveToken(data.token);

  setUser({
    name: data.user.name,
    email: data.user.email,
    photoURL: data.user.photoURL,
    role: data.user.role,
    subscription: data.user.subscription,
  });

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
        googleLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;