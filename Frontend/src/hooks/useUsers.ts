import type { IUser } from "@/interface/IUser"

import { useData } from "./useData"

export function useUsers(): IUser[] {
  const users = useData<IUser[]>("/admin/users")

  if (!users) {
    return []
  }

  return users
}
