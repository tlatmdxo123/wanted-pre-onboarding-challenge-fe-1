import React, { FC } from 'react'
import { useTodos } from '@components/Todo/hooks/useTodos'
import TodoListView from '@components/Todo/TodoList/TodoListView'

const TodoList: FC = () => {
  const { todos } = useTodos()
  return <TodoListView list={todos}/>
}

export default TodoList
