import React from "react"
import styles from "./PageNotFound.module.css"
import { Link } from "react-router"

export const PageNotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>404</h1>
          <h2 className={styles.subtitle}>Page Not Found</h2>
          <p className={styles.description}>
            The page you're looking for doesn't exist or has been moved.
            <br />
            Let's get you back on track!
          </p>
        </div>

        <div className={styles.actions}>
          <Link to="/posts" className={styles.primaryButton}>
            Go to Posts
          </Link>

          <button onClick={() => window.history.back()} className={styles.secondaryButton}>
            Go Back
          </button>
        </div>

        <div className={styles.suggestions}>
          <h3 className={styles.suggestionsTitle}>Popular pages:</h3>
          <div className={styles.suggestionsList}>
            <Link to="/posts" className={styles.suggestionLink}>
              📝 All Posts
            </Link>
            <Link to="/users/1/albums" className={styles.suggestionLink}>
              🖼️ Photo Albums
            </Link>
            <Link to="/users/1/todos" className={styles.suggestionLink}>
              ✅ Todo List
            </Link>
            <Link to="/users/1/posts" className={styles.suggestionLink}>
              👤 User Posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
