import { type FC, type JSX, Suspense } from "react"
import s from "./withSuspense.module.css"

export const withSuspense =
  <T extends object>(Component: FC<T>): FC<T> =>
  (props: T): JSX.Element => (
    <Suspense fallback={<div className={s.fallback}>Loading…</div>}>
      <Component {...props} />
    </Suspense>
  )
