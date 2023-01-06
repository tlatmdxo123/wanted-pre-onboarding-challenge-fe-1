import React, { FC } from 'react'
import { TodoItemType } from '@components/Todo/types'

interface TodoItemProps {
  item: TodoItemType
}

const TodoItem: FC<TodoItemProps> = ({ item }) => {
  return <li>
        <p>{item.title}</p>
        <p>{item.content}</p>
    </li>
}

export default TodoItem
