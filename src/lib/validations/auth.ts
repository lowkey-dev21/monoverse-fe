import { z } from "zod";

// Common validation patterns
const emailSchema = z.string().email("Invalid email address");
const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
    "Password must contain at least one lowercase letter, one uppercase letter, and one number"
  );
const otpSchema = z
  .string()
  .length(6, "OTP must be 6 characters")
  .regex(/^\d+$/, "OTP must contain only numbers");

// Schema for initiate registration (sign-up)
export const initiateRegistrationSchema = z.object({
  email: emailSchema,
  full_name: z.string().min(2, "Name must be at least 2 characters"),
});

// Schema for email verification
export const verifyEmailSchema = z.object({
  email: emailSchema,
  otp: otpSchema,
});

// Schema for initiate login
export const initiateLoginSchema = z.object({
  email: emailSchema,
});

// Schema for login verification
export const verifyLoginSchema = z.object({
  email: emailSchema,
  otp: otpSchema,
});

// Schema for sign-up form (client-side validation)
export const signupFormSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// Schema for sign-in form (client-side validation)
export const signinFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  rememberMe: z.boolean().optional(),
});

// Infer types from schemas
export type InitiateRegistrationInput = z.infer<
  typeof initiateRegistrationSchema
>;
export type VerifyEmailInput = z.infer<typeof verifyEmailSchema>;
export type InitiateLoginInput = z.infer<typeof initiateLoginSchema>;
export type VerifyLoginInput = z.infer<typeof verifyLoginSchema>;
export type SignupFormInput = z.infer<typeof signupFormSchema>;
export type SigninFormInput = z.infer<typeof signinFormSchema>;
