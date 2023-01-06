import React, { FC, Suspense } from 'react'
import TodoList from '@components/Todo/TodoList'

const Todo: FC = () => {
  return <Suspense fallback={<div>loading..</div>}>
      <TodoList/>
  </Suspense>
}

export default Todo
