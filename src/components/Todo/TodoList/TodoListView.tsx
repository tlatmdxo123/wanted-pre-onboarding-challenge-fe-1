import React, { FC } from 'react'
import { TodoItemType } from '@components/Todo/types'
import { NavLink } from 'react-router-dom'
import TodoItem from '@components/Todo/TodoItem'

interface TodoListProps {
  list: TodoItemType[]
}

const TodoListView: FC<TodoListProps> = ({ list }) => {
  return <ul>
        {list.map(item => {
          return (<NavLink key={item.id} to={`/todos/${item.id}`}>
            <TodoItem item={item}/>
          </NavLink>)
        })}
    </ul>
}

export default TodoListView
