/**
 * Shared user-status helper.
 *
 * Previously copy-pasted identically into:
 *   - auth.middleware.js
 *   - auth.controller.js
 *   - internalAdmin.middleware.js
 *
 * Single source of truth now lives here.
 */
export function isUserActive(user) {
  if (!user) return false;

  if (typeof user.isAccountActive === 'function') {
    return user.isAccountActive();
  }

  if (user.status) {
    return user.status === 'active';
  }

  return Boolean(user.isActive);
}
