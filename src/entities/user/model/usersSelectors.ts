import { usersAdapter } from "@/entities/user"
import type { RootState } from "@/app/model/store.ts"

const selectors = usersAdapter.getSelectors((state: RootState) => state.users)

export const { selectById: selectUserById } = selectors
