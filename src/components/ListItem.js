import styled from 'styled-components'
import { Checkbox } from './Checkbox'
import px2rem from '../utils/px2rem'
import { MEDIA } from '../styles/media'
import { Draggable } from 'react-beautiful-dnd'

const Li = styled.li`
    align-items: center;
    background: ${({ theme }) => theme.listBackground};
    border-bottom: 1px solid ${({ theme }) => theme.checkBorder};
    display: flex;
    font-size: ${px2rem(12)};
    padding: ${px2rem(16)} ${px2rem(20)};
    ${({ theme, completed }) => completed ? `color: ${theme.completedItems}; text-decoration: line-through;` : `color: ${theme.listItems};`
    }
    transition: all 1s;

    ${MEDIA.desktop} {
        font-size: ${px2rem(18)};
        padding: ${px2rem(20)} ${px2rem(24)};
    }
`

const CloseBtn = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    margin-left: auto;

    ${MEDIA.desktopLg} {
        visibility: hidden;
    }

    ${Li}:hover & {
        ${MEDIA.desktopLg} {
           visibility: visible;
        }
    }
`

const Close = styled.svg`
    height: 12px;
    width: 12px;
    
    ${MEDIA.desktop} {
        height: 18px;
        width: 18px;
}
`

export const ListItem = ({ text, completed, todo, todos, setTodos, theme, index }) => {
    
    const deleteHandler = () => {
        setTodos(todos.filter((item) => item.id !== todo.id))
    }

    return (
        <Draggable draggableId={todo.id} index={index}>
        {(provided) => (
            <Li completed={completed}
            ref={provided.innerRef} 
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            >
            <Checkbox completed={completed} todo={todo} todos={todos} setTodos={setTodos}/>
            <div style={{cursor: "pointer"}}>{text}</div>
            <CloseBtn onClick={deleteHandler} aria-label="Delete item">
            { theme === 'light' ? 
            <Close xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></Close>
            :
            <Close xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="#5B5E7E" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></Close>
            }
            </CloseBtn>
        </Li>
        )}
        </Draggable>
    )
}
