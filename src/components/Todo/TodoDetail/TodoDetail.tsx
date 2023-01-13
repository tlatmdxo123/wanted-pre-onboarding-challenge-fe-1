import React, { FC, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { useTodoDetail } from '@components/Todo/hooks/useTodoDetail'
import TodoDetailView from '@components/Todo/TodoDetail/TodoDetailView'

const TodoDetail: FC = () => {
  const { todoId = '' } = useParams()
  const todoItem = useTodoDetail(todoId)

  if (todoItem === undefined) return <div>할 일을 선택해 주세요</div>
  return <Suspense fallback={<p>loading...</p>}>
    <TodoDetailView todoItem={todoItem}/>
  </Suspense>
}

export default TodoDetail
