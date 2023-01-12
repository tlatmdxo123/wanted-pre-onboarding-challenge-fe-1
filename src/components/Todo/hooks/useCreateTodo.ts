import { AxiosResponse } from 'axios'
import { TodoCreateResponse, TodoCreateType } from '@components/Todo/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { todoApi } from '@components/Todo/api'

export const useCreateTodo = (): { createTodo: (todo: TodoCreateType) => Promise<void> } => {
  const queryClient = useQueryClient()
  const { mutate } = useMutation<AxiosResponse<TodoCreateResponse>, unknown, TodoCreateType>(['todo', 'create'], todoApi.createTodo, { onSuccess: async () => { await queryClient.invalidateQueries({ queryKey: ['todos'] }) } })
  return { createTodo: async (todo: TodoCreateType) => { mutate(todo) } }
}
