import "./index.css"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { Toaster } from "@/components/ui/sonner"

import App from "./App.tsx"
import { UserContextProvider } from "./context/UserContext.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserContextProvider>
      <App />
      <Toaster />
    </UserContextProvider>
  </StrictMode>,
)
