import s from "./PageNotFound.module.css"
import { Link } from "react-router"

export const PageNotFound = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.textContent}>
          <h1 className={s.title}>404</h1>
          <h2 className={s.subtitle}>Page Not Found</h2>
          <p className={s.description}>
            The page you're looking for doesn't exist or has been moved.
            <br />
            Let's get you back on track!
          </p>
        </div>

        <div className={s.actions}>
          <Link to="/posts" className={s.primaryButton}>
            Go to Posts
          </Link>

          <button onClick={() => window.history.back()} className={s.secondaryButton}>
            Go Back
          </button>
        </div>

        <div className={s.suggestions}>
          <h3 className={s.suggestionsTitle}>Popular pages:</h3>
          <div className={s.suggestionsList}>
            <Link to="/posts" className={s.suggestionLink}>
              📝 All Posts
            </Link>
            <Link to="/users/1/albums" className={s.suggestionLink}>
              🖼️ Photo Albums
            </Link>
            <Link to="/users/1/todos" className={s.suggestionLink}>
              ✅ Todo List
            </Link>
            <Link to="/users/1/posts" className={s.suggestionLink}>
              👤 User Posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
