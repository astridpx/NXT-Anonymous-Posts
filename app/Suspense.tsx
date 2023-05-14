"use client";

import { Suspense } from "react";

const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div>Loading Here....</div>}>{children}</Suspense>
);

export default SuspenseWrapper;
