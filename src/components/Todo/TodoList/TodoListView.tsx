import React, { FC } from 'react'
import { TodoItemType } from '@components/Todo/types'
import TodoItem from '@components/Todo/TodoItem'

interface TodoListProps {
  list: TodoItemType[]
}

const TodoListView: FC<TodoListProps> = ({ list }) => {
  return <ul>
        {list.map(item => {
          return (<TodoItem key={item.id} item={item}/>)
        })}
    </ul>
}

export default TodoListView
