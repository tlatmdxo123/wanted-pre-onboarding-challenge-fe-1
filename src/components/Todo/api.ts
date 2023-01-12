import fetcher from '@utils/fetcher'
import { TodoCreateResponse, TodoCreateType, TodosResponse } from '@components/Todo/types'

export const todoApi = {
  getTodos: async () => await fetcher.get<TodosResponse>('/todos'),
  createTodo: async (todo: TodoCreateType) => await fetcher.post<TodoCreateResponse>('/todos', todo)
}
