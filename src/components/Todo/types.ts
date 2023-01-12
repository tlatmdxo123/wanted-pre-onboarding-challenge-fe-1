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

export interface TodoCreateType {
  title: string
  content: string
}

export interface TodoCreateResponse {
  data: TodoItemType
}
