"use client";

/**
 * SECURITY NOTE:
 * The `authToken` cookie is now set with `httpOnly: true` on the backend.
 * This means JavaScript CANNOT read or write it — the browser manages it
 * automatically on every request when using `credentials: "include"`.
 *
 * These functions are kept as no-ops to avoid breaking existing call-sites
 * in AuthContext. They should be cleaned up in a future refactor once all
 * callers are updated to rely solely on the httpOnly cookie.
 */

/** @deprecated Cookie is httpOnly — JS cannot read it. Always returns null. */
export const getAuthToken = (): string | null => {
  return null;
};

/** @deprecated Cookie is httpOnly — JS cannot write it. This is a no-op. */
export const setAuthToken = (_token: string): void => {
  void _token;
  // No-op: the backend sets the httpOnly cookie via Set-Cookie response header.
};

/** @deprecated Cookie is httpOnly — JS cannot clear it. This is a no-op.
 *  Logout is handled server-side via POST /auth/logout which clears the cookie.
 */
export const removeAuthToken = (): void => {
  // No-op: the backend clears the cookie via the logout endpoint.
};
