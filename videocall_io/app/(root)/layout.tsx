import StreamVideoProvider from "@/providers/StreamVideoClient";
import { Metadata } from "next";
import { ReactNode } from "react";
export const metadata: Metadata = {
  title: "VideoCall.io",
  description: "A workspace for your team, powered by Stream Chat and Clerk.",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
