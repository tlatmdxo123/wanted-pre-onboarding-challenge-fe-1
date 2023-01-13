import React, { FC } from 'react'
import { TodoItemType } from '@components/Todo/types'

interface TodoDetailViewProps {
  todoItem: TodoItemType
}
const TodoDetailView: FC<TodoDetailViewProps> = ({ todoItem }) => {
  const { title, content } = todoItem
  return <div>
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
}

export default TodoDetailView
