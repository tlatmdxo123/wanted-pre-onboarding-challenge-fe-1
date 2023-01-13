import { AxiosResponse } from 'axios'
import { useSuspenseQuery } from '@query/hooks/useSuspenceQuery'
import { todoApi } from '@components/Todo/api'
import { TodoCreateResponse, TodoItemType } from '@components/Todo/types'

export const useTodoDetail = (id: string): TodoItemType | undefined => {
  const { data: result } = useSuspenseQuery<AxiosResponse<TodoCreateResponse>, unknown, TodoCreateResponse>(['todo', 'detail', id], async () => await todoApi.getTodo(id), { select: ({ data }) => data, enabled: id.length !== 0 })
  return result?.data
}
