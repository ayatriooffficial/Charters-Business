import { v4 as uuidv4 } from "uuid";

const CONSENT_KEY = "cookie_consent_v1";
const DEVICE_KEY = "device_id_v1";
const SESSION_KEY = "anon_session_v1";

export type AnonSession = {
  sessionId: string;
  deviceId: string;
  pageViewsTotal: number;
  uniquePages: string[];
  chatInteractions: number;
  startedAt: number;
  lastSeenAt: number;
};

function hasConsent(): boolean {
  return localStorage.getItem(CONSENT_KEY) === "accepted";
}

function getOrCreateDeviceId(): string {
  let id = localStorage.getItem(DEVICE_KEY);
  if (!id) {
    id = uuidv4();
    localStorage.setItem(DEVICE_KEY, id);
  }
  return id;
}

export function clearAnonSession() {
  localStorage.removeItem(SESSION_KEY);
}

export function getOrCreateAnonSession(): AnonSession | null {
  if (!hasConsent()) return null;

  const deviceId = getOrCreateDeviceId();
  const raw = localStorage.getItem(SESSION_KEY);

  if (raw) {
    const parsed: AnonSession = JSON.parse(raw);
    return parsed;
  }

  const fresh: AnonSession = {
    sessionId: uuidv4(),
    deviceId,
    pageViewsTotal: 0,
    uniquePages: [],
    chatInteractions: 0,
    startedAt: Date.now(),
    lastSeenAt: Date.now(),
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(fresh));
  return fresh;
}

function save(session: AnonSession) {
  session.lastSeenAt = Date.now();
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function trackPage(pathname: string) {
  const session = getOrCreateAnonSession();
  if (!session) return;

  session.pageViewsTotal += 1;
  if (!session.uniquePages.includes(pathname)) session.uniquePages.push(pathname);
  save(session);
}

export function trackChatInteraction() {
  const session = getOrCreateAnonSession();
  if (!session) return;

  session.chatInteractions += 1;
  save(session);
}

/*
 Call this after the user is logged in successfully.
 It sends the anon session to backend and clears local data.
 */
export async function flushTrackingToBackend(apiBaseUrl: string, authToken: string) {
  const sessionRaw = localStorage.getItem(SESSION_KEY);
  if (!sessionRaw) return;

  const payload = JSON.parse(sessionRaw);

  await fetch(`${apiBaseUrl}/api/v1/users/merge-tracking`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify(payload),
  });

  clearAnonSession();
}