import { createEntityAdapter } from "@reduxjs/toolkit"
import type { TUser } from "@/entities/user"

export const usersAdapter = createEntityAdapter({
  selectId: (user: TUser) => user.userId,
})
