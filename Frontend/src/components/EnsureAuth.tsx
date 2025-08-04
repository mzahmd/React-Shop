import { useAuth } from "@/hooks/useAuth";
import { AuthRouter } from "@/pages/AuthArea/router";

export default function EnsureAuth({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    AuthRouter.push("Login");
  }

  return <>{children}</>;
}
