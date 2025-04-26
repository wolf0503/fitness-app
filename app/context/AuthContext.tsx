"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type User = {
  email: string;
  purchasedPlans: number[];
} | null;

type AuthContextType = {
  user: User;
  login: (email: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);

  const login = (email: string) => { // Remove password parameter
    setUser({ email, purchasedPlans: [1, 2] });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);