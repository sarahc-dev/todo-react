import styled from 'styled-components'
import px2rem from '../utils/px2rem'
import { MEDIA } from '../styles/media'
import { COLORS } from '../styles/colors'

const Container = styled.li`
    display: flex;
    align-items: center;
    
    font-size: ${px2rem(12)};
    padding: ${px2rem(16)} ${px2rem(20)};
    border-bottom: 1px solid ${({ theme }) => theme.checkBorder};
    ${({ theme, completed }) => completed ? `color: ${theme.completedItems}; text-decoration: line-through;` : `color: ${theme.listItems};`
    }
    

`

// WORKS
// color: ${({ theme, completed }) => completed ? theme.completedItems : theme.listItems
//     };

const CheckBtn = styled.button`
    background: none;
    border: none;
    margin-right: ${px2rem(12)};
`

const CloseBtn = styled.button`
    background: none;
    border: none;
    margin-left: auto;
`

const Close = styled.svg`
width: 12px;
height: 12px;

${MEDIA.desktop} {
    width: 18px;
    height: 18px;
}
`

export const ListItem = ({ text, completed, todo, todos, setTodos, theme }) => {
    
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    
    const deleteHandler = () => {
        setTodos(todos.filter((item) => item.id !== todo.id))
    }

    return (
        <Container completed={completed}>
        <CheckBtn onClick={completeHandler}>-</CheckBtn>
            {text}
            <CloseBtn onClick={deleteHandler}>
            { theme === 'light' ? 
            <Close xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><title>Delete</title><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></Close>
            :
            <Close xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><title>Delete</title><path fill="#5B5E7E" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></Close>
            }
            </CloseBtn>
        </Container>
    )
}
