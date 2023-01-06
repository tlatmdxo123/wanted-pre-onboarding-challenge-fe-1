import fetcher from '@utils/fetcher'
import { TodosResponse } from '@components/Todo/types'

export const todoApi = {
  getTodos: async () => await fetcher.get<TodosResponse>('/todos')
}
