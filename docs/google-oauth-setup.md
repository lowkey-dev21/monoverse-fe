# Setting up Google OAuth for Monoverse

This guide explains how to set up Google OAuth credentials for Monoverse.

## Step 1: Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Make note of your Project ID

## Step 2: Enable the OAuth APIs

1. Go to "APIs & Services" > "Dashboard"
2. Click "+ ENABLE APIS AND SERVICES"
3. Search for "Google OAuth2 API" and enable it
4. Also enable "Google+ API" if it's available

## Step 3: Configure the OAuth Consent Screen

1. Go to "APIs & Services" > "OAuth consent screen"
2. Select "External" user type (unless you have a Google Workspace)
3. Fill in the required information:
   - App name: "Monoverse"
   - User support email: Your email
   - Developer contact information: Your email
4. Add the necessary scopes:
   - `email`
   - `profile`
5. Add any test users if you're still in testing mode

## Step 4: Create OAuth Client ID

1. Go to "APIs & Services" > "Credentials"
2. Click "CREATE CREDENTIALS" > "OAuth client ID"
3. Application type: "Web application"
4. Name: "Monoverse Web Client"
5. Authorized JavaScript origins:
   - `http://localhost:3000` (for development)
   - `https://your-production-domain.com` (for production)
6. Authorized redirect URIs:
   - `http://localhost:3000` (for development)
   - `http://localhost:3000/auth/callback` (for development with redirect flow)
   - `https://your-production-domain.com` (for production)
   - `https://your-production-domain.com/auth/callback` (for production with redirect flow)
7. Click "CREATE"
8. Note your Client ID and Client Secret

## Step 5: Configure Monoverse

1. Create or update `.env.local` file in the client directory with:

   ```
   NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-client-id-here
   ```

2. Restart your development server

## Testing

1. Navigate to the sign-in page
2. Click the "Continue with Google" button
3. You should be able to log in with your Google account

## Troubleshooting

### Cross-Origin-Opener-Policy (COOP) Issues

If you encounter errors like:

```
Cross-Origin-Opener-Policy policy would block the window.closed call
```

This is related to security policies in modern browsers. Here are solutions:

#### Solution 1: Use the GoogleOneTapButton Component

We've provided an alternative Google sign-in implementation in `/components/auth/google-one-tap.tsx`. This uses Google's One Tap UI which avoids popup windows entirely.

To use it:

1. In your sign-in page, uncomment the `<GoogleOneTapButton />` component
2. Comment out the regular `<SocialButtons />` component with Google option

#### Solution 2: Enable the Auth Callback Page

We've created a dedicated callback page for OAuth redirects:

1. Make sure you've added the redirect URIs to your Google OAuth credentials
2. In `social-buttons.tsx`, modify the `useGoogleLogin` call to use `ux_mode: "redirect"` and specify a `redirect_uri`

#### Solution 3: Server-Side Authentication

For more complex applications, consider implementing a server-side authentication flow where your backend handles the OAuth process.

### Other Common Issues

- If you see "Error 400: redirect_uri_mismatch", ensure your redirect URIs are configured correctly
- If you get "popup_closed_by_user", make sure popups aren't blocked in your browser
- For "Missing required parameter client_id", check that your `.env.local` file is correctly configured and your app is restarted
