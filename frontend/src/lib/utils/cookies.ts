"use client";

/*
 * Get a cookie value by name
 */
export const getAuthToken = (): string | null => {
  if (typeof document === "undefined") return null;

  const cookies = document.cookie.split("; ");

  for (const cookie of cookies) {
    const [name, value] = cookie.split("=");

    if (name === "authToken") {
      return decodeURIComponent(value);
    }
  }

  return null;
};

/*
 * Set auth token cookie
 */
export const setAuthToken = (token: string) => {
  if (typeof document === "undefined") return;

  const expires = new Date();
  expires.setDate(expires.getDate() + 7);

  document.cookie = `authToken=${encodeURIComponent(
    token
  )}; path=/; expires=${expires.toUTCString()}; SameSite=Lax`;
};

/*
 * Remove auth token
 */
export const removeAuthToken = () => {
  if (typeof document === "undefined") return;

  document.cookie =
    "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=Lax";
};