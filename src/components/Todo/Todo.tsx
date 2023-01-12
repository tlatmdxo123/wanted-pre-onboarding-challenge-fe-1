import React, { FC, Suspense } from 'react'
import TodoList from '@components/Todo/TodoList'
import TodoCreate from '@components/Todo/TodoCreate/TodoCreate'

const Todo: FC = () => {
  return <Suspense fallback={<div>loading..</div>}>
      <TodoList/>
      <TodoCreate/>
  </Suspense>
}

export default Todo
