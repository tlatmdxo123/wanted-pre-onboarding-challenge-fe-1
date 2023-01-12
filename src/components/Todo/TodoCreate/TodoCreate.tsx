import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import Input from '@base/Input'
import TextArea from '@base/TextArea'
import { useCreateTodo } from '@components/Todo/hooks/useCreateTodo'
import { TodoCreateType } from '@components/Todo/types'

const TodoCreate: FC = () => {
  const { register, handleSubmit, reset: resetCreateForm } = useForm<TodoCreateType>()
  const { createTodo } = useCreateTodo()

  const handleCreateTodo = async (todo: TodoCreateType): Promise<void> => {
    await createTodo(todo)
    resetCreateForm()
  }

  return <form onSubmit={handleSubmit(handleCreateTodo)}>
        <Input label='제목' {...register('title')}/>
        <TextArea label='내용' {...register('content')}/>
      <button>할 일 추가</button>
    </form>
}

export default TodoCreate
