"use client";

import dynamic from "next/dynamic";

const TrackingBootstrap = dynamic(
  () => import("@/components/shared/TrackingBootstrap"),
  { ssr: false }
);

const ChatbotClient = dynamic(
  () => import("@/components/shared/chatBotClient"),
  { ssr: false }
);

export default function ClientOnlyComponents() {
  return (
    <>
      <TrackingBootstrap />
      <ChatbotClient />
    </>
  );
}