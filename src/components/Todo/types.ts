export interface TodoItemType {
  'title': string
  'content': string
  'id': string
  'createdAt': string
  'updatedAt': string
}

export interface TodosResponse {
  data: TodoItemType[]
}
