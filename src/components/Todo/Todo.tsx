import React, { FC, Suspense } from 'react'
import TodoList from '@components/Todo/TodoList'
import TodoCreate from '@components/Todo/TodoCreate/TodoCreate'
import TodoDetail from '@components/Todo/TodoDetail'

const Todo: FC = () => {
  return <Suspense fallback={<div>loading..</div>}>
      <TodoList/>
      <TodoCreate/>
      <TodoDetail/>
  </Suspense>
}

export default Todo
