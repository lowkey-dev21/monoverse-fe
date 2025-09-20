export interface User {
  id: string;
  email: string;
  name?: string;
  role: UserRole;
  image?: string;
  emailVerified?: Date;
}

export enum UserRole {
  USER = "user",
  ADMIN = "admin",
  INSTRUCTOR = "instructor",
}

export interface AuthResponse {
  message: string;
  user?: User;
  token?: string;
}

export interface GoogleOAuthProfile {
  email: string;
  name?: string;
  picture?: string;
  sub?: string;
  id?: string;
}

export interface InitiateRegistrationRequest {
  email: string;
  full_name: string;
}

export interface VerifyEmailRequest {
  email: string;
  otp: string;
}

export interface InitiateLoginRequest {
  email: string;
}

export interface VerifyLoginRequest {
  email: string;
  otp: string;
}

export interface GoogleAuthRequest {
  token: string;
  profile: GoogleOAuthProfile;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}
