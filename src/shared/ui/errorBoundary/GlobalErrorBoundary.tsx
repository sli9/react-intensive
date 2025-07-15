import { Component, type ErrorInfo, type ReactNode } from "react"

type Props = {
  children: ReactNode
}

type State = {
  hasError: boolean
}

export class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Global Error Boundary caught an error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Упс! Что-то пошло не так 😥</h1>
    }

    return this.props.children
  }
}
