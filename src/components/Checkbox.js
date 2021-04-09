import styled from 'styled-components'
import px2rem from '../utils/px2rem'
import { COLORS } from '../styles/colors'
import { MEDIA } from '../styles/media'

const Button = styled.button`
    align-items: center;
    background: none;
    border: 1px solid ${({ theme }) => theme.checkBorder};
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    height: 20px;
    justify-content: center;
    margin-right: ${px2rem(12)};
    width: 20px;
    ${({ completed }) => completed && `
    background: ${COLORS.checkBackground};
    border: none;
    `}

    &:hover {
        ${({ completed }) => !completed && `
        border-color: transparent;
        background: ${COLORS.checkBackground} border-box;
        -webkit-mask:
        linear-gradient(#fff 0 0) padding-box, 
        linear-gradient(#fff 0 0);
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;
        `}
    }

    &:active, &:focus {
        outline: none;
    }

    ${MEDIA.desktop} {
        height: 24px;
        margin-right: ${px2rem(24)};
        width: 24px;
    }
`

const Svg = styled.svg`
    height: 7px;
    width: 9px;
    ${({ completed }) => !completed && `
        display: none;
    `}
    
    ${MEDIA.desktop} {
        height: 9px;
        width: 11px;
}
`

export const Checkbox = ({ completed, todo, todos, setTodos }) => {
    
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
    
    return (
        <Button onClick={completeHandler} aria-label="Mark as complete" completed={completed}>
        <Svg completed={completed} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11" height="9"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></Svg>
        </Button>
    )
}