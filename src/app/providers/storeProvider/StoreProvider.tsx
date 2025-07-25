import { Provider } from "react-redux"
import { store } from "../../model/store.ts"
import type { PropsWithChildren } from "react"

export const StoreProvider = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>
}
