import { useAuth } from "@/hooks/useAuth";
import { Router } from "@/router";

export default function EnsureAuth({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    Router.push("AuthLogin");
  }

  return <>{children}</>;
}
