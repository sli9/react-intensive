import type { ReactNode } from "react"
import { Provider } from "react-redux"
import { store } from "../../model/store.ts"

type StoreProviderProps = {
  children: ReactNode
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  return <Provider store={store}>{children}</Provider>
}
