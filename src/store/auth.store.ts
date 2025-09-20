import { authAPI } from "@/service/api";
import { User } from "@/types/auth.types";
import { AxiosError } from "axios";
import { create } from "zustand";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  authToken: string | null;
}

interface AuthStore extends AuthState {
  // Auth actions
  initiateRegistration: (email: string, fullName: string) => Promise<void>;
  verifyEmail: (email: string, otp: string) => Promise<void>;
  initiateLogin: (email: string) => Promise<void>;
  verifyLogin: (email: string, otp: string) => Promise<void>;
  googleAuth: (token: string, profile: unknown) => Promise<unknown>; // Changed to return the response
  logout: () => Promise<void>;

  // Store actions
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void; // Add setter for token
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  clearState: () => void;
}

// Initial state
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  authToken: null,
};

// Create the auth store
export const useAuthStore = create<AuthStore>()((set) => ({
  ...initialState,

  // Auth actions
  initiateRegistration: async (email: string, fullName: string) => {
    try {
      set({ isLoading: true, error: null });
      await authAPI.initiateRegistration({ email, full_name: fullName });
      set({ isLoading: false });
    } catch (error) {
      const message =
        error instanceof AxiosError
          ? error.response?.data?.message || "Registration failed"
          : "Registration failed";
      set({ isLoading: false, error: message });
      throw new Error(message);
    }
  },

  verifyEmail: async (email: string, otp: string) => {
    try {
      set({ isLoading: true, error: null });
      const response = await authAPI.verifyEmail({ email, otp });

      if (response.data?.data?.user && response.data?.data?.token) {
        set({
          user: response.data.data.user,
          isAuthenticated: true,
          isLoading: false,
          authToken: response.data.data.token,
        });

        // Store token in session storage for API requests
        if (typeof window !== "undefined") {
          sessionStorage.setItem("auth_token", response.data.data.token);
        }
      } else {
        set({ isLoading: false });
      }
    } catch (error) {
      const message =
        error instanceof AxiosError
          ? error.response?.data?.message || "Email verification failed"
          : "Email verification failed";
      set({ isLoading: false, error: message });
      throw new Error(message);
    }
  },
  initiateLogin: async (email: string) => {
    try {
      set({ isLoading: true, error: null });
      await authAPI.initiateLogin({ email });
      set({ isLoading: false });
    } catch (error) {
      const message =
        error instanceof AxiosError
          ? error.response?.data?.message || "Login initiation failed"
          : "Login initiation failed";
      set({ isLoading: false, error: message });
      throw new Error(message);
    }
  },

  verifyLogin: async (email: string, otp: string) => {
    try {
      set({ isLoading: true, error: null });
      const response = await authAPI.verifyLogin({ email, otp });

      if (response.data?.data?.user && response.data?.data?.token) {
        set({
          user: response.data.data.user,
          isAuthenticated: true,
          isLoading: false,
          authToken: response.data.data.token,
        });

        // Store token in session storage for API requests
        if (typeof window !== "undefined") {
          sessionStorage.setItem("auth_token", response.data.data.token);
        }
      } else {
        set({ isLoading: false });
      }
    } catch (error) {
      const message =
        error instanceof AxiosError
          ? error.response?.data?.message || "Login verification failed"
          : "Login verification failed";
      set({ isLoading: false, error: message });
      throw new Error(message);
    }
  },
  googleAuth: async (token: string, profile: unknown) => {
    try {
      set({ isLoading: true, error: null });
      const response = await authAPI.googleAuth({ token, profile });
      console.log("Full Google auth response:", response.data);

      if (response.data?.data?.user) {
        // Set the user state and token if available
        set({
          user: response.data.data.user,
          isAuthenticated: true,
          isLoading: false,
          authToken: response.data.data.token || null,
        });

        // Store token in session storage for API requests
        if (response.data?.data?.token && typeof window !== "undefined") {
          sessionStorage.setItem("auth_token", response.data.data.token);
          console.log("Token stored in session storage");
        }

        if (response.data?.data?.token) {
          console.log(
            "Token received from Google auth, length:",
            response.data.data.token.length
          );
        } else {
          console.warn("No token received in Google auth response");
        }

        console.log(
          "Google auth successful, user set:",
          response.data.data.user
        );

        // Return the response to allow further processing
        return response;
      } else {
        set({ isLoading: false });
        console.warn("Google auth response missing user data:", response.data);
        return response;
      }
    } catch (error) {
      const message =
        error instanceof AxiosError
          ? error.response?.data?.message || "Google authentication failed"
          : "Google authentication failed";
      set({ isLoading: false, error: message });
      throw new Error(message);
    }
  },

  logout: async () => {
    try {
      set({ isLoading: true });
      await authAPI.logout();

      // Always clear auth state on logout
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
        authToken: null,
      });

      // Clear session storage
      if (typeof window !== "undefined") {
        sessionStorage.removeItem("auth_token");
      }

      console.log("Logged out successfully, cleared auth state");
    } catch (error) {
      const message =
        error instanceof AxiosError
          ? error.response?.data?.message || "Logout failed"
          : "Logout failed";

      // Still clear token and auth state even if API call fails
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: message,
        authToken: null,
      });

      // Clear session storage
      if (typeof window !== "undefined") {
        sessionStorage.removeItem("auth_token");
      }

      console.error("Logout error but cleared auth state:", message);
      throw new Error(message);
    }
  },

  // Store actions
  setUser: (user: User | null) => set({ user, isAuthenticated: !!user }),
  setToken: (token: string | null) => {
    set({ authToken: token });
    // Also store in session storage for API requests
    if (typeof window !== "undefined") {
      if (token) {
        sessionStorage.setItem("auth_token", token);
      } else {
        sessionStorage.removeItem("auth_token");
      }
    }
  },
  setLoading: (isLoading: boolean) => set({ isLoading }),
  setError: (error: string | null) => set({ error }),
  clearState: () => {
    set(initialState);
    // Clear session storage
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("auth_token");
    }
  },
}));
