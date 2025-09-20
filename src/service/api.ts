import axios, {
    AxiosError,
    AxiosResponse,
    InternalAxiosRequestConfig
} from "axios";

// Create a custom instance of axios
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4040",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Important for cookies
});

// Response interceptor for handling errors
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // Check for auth token in response header
    const authToken = response.headers["authorization"];
    if (authToken && typeof window !== "undefined") {
      try {
        // If we get a token in the header, store it directly
        console.log("Received auth token in response header");
        const token = authToken.replace("Bearer ", "");
        sessionStorage.setItem("auth_token", token);
        console.log("Updated auth token in session storage");
      } catch (error) {
        console.error("Error handling auth token from header:", error);
      }
    }

    // Add response debugging
    console.log(`API Response: ${response.status} ${response.config.url}`, {
      headers: response.headers,
      data: response.data,
    });
    return response;
  },
  (error: AxiosError) => {
    const response = error.response;

    // Debug error response
    console.error(`API Error: ${response?.status} ${error.config?.url}`, {
      headers: response?.headers,
      data: response?.data,
      message: error.message,
    });

    // You can handle specific error codes here
    if (response?.status === 401) {
      // Handle unauthorized errors
      // For example, you might want to redirect to login page
      if (typeof window !== "undefined") {
        // Only redirect on client side
        window.location.href = "/signin";
      }
    }

    return Promise.reject(error);
  }
);

// Request interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Add request debugging
    console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`, {
      headers: {
        ...config.headers,
        Authorization: config.headers?.Authorization
          ? typeof config.headers.Authorization === "string"
            ? `${config.headers.Authorization.substring(0, 15)}...`
            : String(config.headers.Authorization)
          : "none",
      },
      withCredentials: config.withCredentials,
    });

    // Add auth token from session storage if available (client-side only)
    if (typeof window !== "undefined") {
      try {
        const authToken = sessionStorage.getItem("auth_token");

        if (authToken && config.headers) {
          config.headers["Authorization"] = `Bearer ${authToken}`;
          console.log(
            "Added auth token to request header:",
            `Bearer ${authToken.substring(0, 15)}...`
          );
        }
      } catch (error) {
        console.error("Error accessing auth token:", error);
      }
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Define authentication API endpoints
const authAPI = {
  // Start registration process by sending OTP
  initiateRegistration: (data: { email: string; full_name: string }) =>
    api.post("/api/v1/auth/sign-up", data),

  // Verify email with OTP
  verifyEmail: (data: { email: string; otp: string }) =>
    api.post("/api/v1/auth/verify", data),

  // Start login process by sending OTP
  initiateLogin: (data: { email: string }) =>
    api.post("/api/v1/auth/sign-in", data),

  // Verify login with OTP
  verifyLogin: (data: { email: string; otp: string }) =>
    api.post("/api/v1/auth/verify-login", data),

  // Google OAuth
  googleAuth: (data: { token: string; profile: unknown }) =>
    api.post("/api/v1/auth/google", data),

  // Link Google account to existing user
  linkGoogleAccount: (data: { token: string; profile: unknown }) =>
    api.post("/api/v1/auth/link-google", data),

  // Logout
  logout: () => api.post("/api/v1/auth/logout"),

  // Get current user
  getCurrentUser: () => api.get("/api/v1/users/me"),
};

export { api, authAPI };
