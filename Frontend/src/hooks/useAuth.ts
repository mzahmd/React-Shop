
export function useAuth() {
  const isAuthenticated = localStorage.getItem("user");

  return !!isAuthenticated;

}