"use client";

import { SessionProvider } from "next-auth/react";

interface ProviderProps {
  children?: React.ReactNode;
  session?: any;
}

const Provider = ({ children, session }: ProviderProps) => (
  <SessionProvider session={session}>{children}</SessionProvider>
);

export default Provider;
