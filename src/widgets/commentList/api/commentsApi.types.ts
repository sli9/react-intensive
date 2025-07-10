export type Comment = {
  id: number
  text: string
  author: string
}

export type MockComments = {
  [postId: number]: Comment[]
}
