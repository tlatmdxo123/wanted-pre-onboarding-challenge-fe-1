import { todoApi } from '@components/Todo/api'
import { useSuspenseQuery } from '@query/hooks/useSuspenceQuery'
import { AxiosResponse } from 'axios'
import { TodoItemType, TodosResponse } from '@components/Todo/types'

interface TodosHook {
  todos: TodoItemType[]
}
export const useTodos = (): TodosHook => {
  const { data: result } = useSuspenseQuery<AxiosResponse<TodosResponse>, unknown, TodosResponse>(['todos'], todoApi.getTodos, { select: ({ data }) => data })

  return { todos: result.data }
}
