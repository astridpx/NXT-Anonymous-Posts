"use client";

import { SessionProvider } from "next-auth/react";

interface ProviderProps {
  children?: React.ReactNode;
  // session?: any;
}

const Provider = ({ children }: ProviderProps) => (
  // <SessionProvider session={session}>{children}</SessionProvider>
  <SessionProvider>{children}</SessionProvider>
);

export default Provider;
