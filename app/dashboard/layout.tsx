import Header from "@/components/Header";
import { ClerkLoaded } from "@clerk/nextjs";
import { ReactNode } from "react";

function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkLoaded>
      <div className="flex-1 flex flex-col h-screen">
        <Header />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </ClerkLoaded>
  );
}

export default DashboardLayout;
