import { CommentIcon } from "@/shared/icons"

type ToggleCommentsButtonProps = {
  onClick: () => void
  commentsAmount?: number
  disabled: boolean
  className?: string
}

export const ToggleCommentsButton = ({ onClick, commentsAmount, disabled, className }: ToggleCommentsButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`flex-container ${className}`} aria-label="Comments">
      <CommentIcon />
      {commentsAmount}
    </button>
  )
}
