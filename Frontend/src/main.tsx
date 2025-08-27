import "./index.css"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { ThemeProvider } from "@/components/theme-provider.tsx"
import { Toaster } from "@/components/ui/sonner"

import App from "./App.tsx"
import { UserContextProvider } from "./context/UserContext.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserContextProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
      <Toaster />
    </UserContextProvider>
  </StrictMode>,
)
