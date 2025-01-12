import StreamVideoProvider from "@/Providers/StreamClientProvider";
import React, { ReactNode } from "react";

const ReactLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default ReactLayout;
