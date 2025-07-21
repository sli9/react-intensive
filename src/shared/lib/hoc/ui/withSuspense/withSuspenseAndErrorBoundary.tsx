import { type ComponentType, type FC, Suspense } from "react"
import s from "./withSuspense.module.css"
import { PageErrorBoundary } from "@/shared/ui/errorBoundary/PageErrorBoundary.tsx"

export const withSuspenseAndErrorBoundary =
  (Component: ComponentType): FC =>
  () => (
    <PageErrorBoundary>
      <Suspense fallback={<div className={s.fallback}>Loading…</div>}>
        <Component />
      </Suspense>
    </PageErrorBoundary>
  )
