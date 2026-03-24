"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { useRouter } from "next/navigation";
import { flushTrackingToBackend } from "@/lib/Tracking";
import { getAuthToken } from "@/lib/utils/cookies";

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string | null;
  role: string;
  isFirstLogin?: boolean;
  lastResumeUrl?: string | null;
  lastResumeUploadedAt?: string | null;
}

interface Application {
  applicationNumber: string;
  status: string;
  program?: string;
  createdAt?: string;
}

interface Counseling {
  counselingNumber: string;
  status: string;
  program?: string;
  counselingDate?: string;
  counselingTime?: string;
  createdAt?: string;
}

interface AuthContextType {
  user: User | null;
  applications: Application[];
  counselings: Counseling[];
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<string | undefined>;
  loginWithPhone: (idToken: string) => Promise<string | undefined>;
  signupWithPhone: (
    idToken: string,
    name: string,
    email: string
  ) => Promise<string | undefined>;
  logout: () => void;
  setAuth: (
    user: User,
    token: string,
    applications?: Application[],
    counselings?: Counseling[]
  ) => void;
  updateUser: (userData: Partial<User>) => void;
  refreshApplications: () => Promise<void>;
  refreshCounselings: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function getApiV1Base(): string {
  const raw = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
  return raw.replace(/\/$/, "") + "/api/v1";
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [applications, setApplications] = useState<Application[]>([]);
  const [counselings, setCounselings] = useState<Counseling[]>([]);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();
  const API_V1 = getApiV1Base();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const storedToken = localStorage.getItem("token") || getAuthToken();
    const storedUser = localStorage.getItem("user");
    const storedApplications = localStorage.getItem("applications");
    const storedCounselings = localStorage.getItem("counselings");

    if (storedToken && storedUser) {
      try {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));

        if (storedApplications)
          setApplications(JSON.parse(storedApplications));

        if (storedCounselings)
          setCounselings(JSON.parse(storedCounselings));
      } catch (error) {
        console.error("Error loading auth data:", error);
        localStorage.clear();
        sessionStorage.clear();
      }
    }

    setIsLoading(false);
  }, [isMounted]);

  const refreshApplications = useCallback(
    async (authToken?: string) => {
      const tkn = authToken || token;
      if (!tkn) return;

      try {
        const response = await fetch(`${API_V1}/applications/user`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tkn}`,
          },
        });

        const data = await response.json();

        if (response.ok && data.data) {
          setApplications(data.data);
          if (isMounted)
            localStorage.setItem(
              "applications",
              JSON.stringify(data.data)
            );
        }
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    },
    [token, API_V1, isMounted]
  );

  const refreshCounselings = useCallback(
    async (authToken?: string) => {
      const tkn = authToken || token;
      if (!tkn) return;

      try {
        const response = await fetch(`${API_V1}/counseling/user`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tkn}`,
          },
        });

        const data = await response.json();

        if (response.ok && data.data) {
          setCounselings(data.data);
          if (isMounted)
            localStorage.setItem(
              "counselings",
              JSON.stringify(data.data)
            );
        }
      } catch (error) {
        console.error("Error fetching counselings:", error);
      }
    },
    [token, API_V1, isMounted]
  );

  const finalizeLogin = useCallback(
    async (payload: any): Promise<string | undefined> => {
      const tokenFromApi: string | undefined =
        payload?.data?.token ?? payload?.token;

      const apiUser = payload?.data?.user ?? payload?.user;

      if (!tokenFromApi || !apiUser) {
        console.error("Login response missing token or user:", payload);
        throw new Error("Login response invalid (missing token/user)");
      }

      const userData: User = {
        id: apiUser.id,
        name: apiUser.name,
        email: apiUser.email,
        avatar: apiUser.avatar || null,
        role: apiUser.role,
        isFirstLogin: apiUser.isFirstLogin || false,
        lastResumeUrl: apiUser.lastResumeUrl || null,
        lastResumeUploadedAt: apiUser.lastResumeUploadedAt || null,
      };

      setUser(userData);
      setToken(tokenFromApi);
      setApplications(payload?.data?.applications || []);
      setCounselings(payload?.data?.counselings || []);

      if (isMounted) {
        localStorage.setItem("token", tokenFromApi);
        localStorage.setItem("user", JSON.stringify(userData));

        if (payload?.data?.applications) {
          localStorage.setItem(
            "applications",
            JSON.stringify(payload.data.applications)
          );
        }

        if (payload?.data?.counselings) {
          localStorage.setItem(
            "counselings",
            JSON.stringify(payload.data.counselings)
          );
        }

        sessionStorage.setItem("justLoggedIn", "true");
      }

      try {
        const RAW_BASE = API_V1.replace(/\/api\/v1$/, "");
        await flushTrackingToBackend(RAW_BASE, tokenFromApi);
      } catch (e) {
        console.warn("Tracking flush failed:", e);
      }

      return userData.role;
    },
    [API_V1, isMounted]
  );

  const login = useCallback(
    async (email: string, password: string) => {
      const response = await fetch(`${API_V1}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok)
        throw new Error(data.message || "Login failed");

      return finalizeLogin(data);
    },
    [API_V1, finalizeLogin]
  );

  const loginWithPhone = useCallback(
    async (idToken: string) => {
      const response = await fetch(`${API_V1}/auth/firebase-login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });

      const data = await response.json();

      if (!response.ok)
        throw new Error(data.message || "Phone login failed");

      return finalizeLogin(data);
    },
    [API_V1, finalizeLogin]
  );

  const signupWithPhone = useCallback(
    async (idToken: string, name: string, email: string) => {
      const response = await fetch(`${API_V1}/auth/firebase-signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken, name, email }),
      });

      const data = await response.json();

      if (!response.ok)
        throw new Error(data.message || "Phone signup failed");

      return finalizeLogin(data);
    },
    [API_V1, finalizeLogin]
  );

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    setApplications([]);
    setCounselings([]);

    if (isMounted) {
      localStorage.clear();
      sessionStorage.clear();
    }

    router.push("/");
  }, [router, isMounted]);

  const setAuth = useCallback(
    (
      newUser: User,
      newToken: string,
      newApplications?: Application[],
      newCounselings?: Counseling[]
    ) => {
      setUser(newUser);
      setToken(newToken);

      if (newApplications) setApplications(newApplications);
      if (newCounselings) setCounselings(newCounselings);

      if (isMounted) {
        localStorage.setItem("token", newToken);
        localStorage.setItem("user", JSON.stringify(newUser));
      }
    },
    [isMounted]
  );

  const updateUser = useCallback(
    (userData: Partial<User>) => {
      if (!user) return;

      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);

      if (isMounted)
        localStorage.setItem("user", JSON.stringify(updatedUser));
    },
    [user, isMounted]
  );

  const contextValue = useMemo(
    () => ({
      user,
      applications,
      counselings,
      token,
      isLoading,
      login,
      loginWithPhone,
      signupWithPhone,
      logout,
      setAuth,
      updateUser,
      refreshApplications,
      refreshCounselings,
    }),
    [
      user,
      applications,
      counselings,
      token,
      isLoading,
      login,
      loginWithPhone,
      signupWithPhone,
      logout,
      setAuth,
      updateUser,
      refreshApplications,
      refreshCounselings,
    ]
  );

  if (!isMounted) return null;

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("useAuth must be used within an AuthProvider");

  return context;
}