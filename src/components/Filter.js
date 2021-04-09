import styled from 'styled-components'
import px2rem from '../utils/px2rem'
import { MEDIA } from '../styles/media'
import { COLORS } from '../styles/colors'

const ListBottom = styled.div`
    background: ${({ theme }) => theme.listBackground};
    border-radius: 0px 0px 5px 5px;
    box-shadow: 0px 35px 50px -15px ${({ theme }) => theme.dropShadow};
    color: ${({ theme }) => theme.footerText};
    display: flex;
    font-size: ${px2rem(12)};
    justify-content: space-between;
    padding: ${px2rem(16)} ${px2rem(20)} ${px2rem(20)};

    ${MEDIA.desktop} {
        font-size: ${px2rem(14)};
        padding: ${px2rem(16)} ${px2rem(24)};
    }
`

const Clear = styled.p`
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.hover};
    }
`

const Container = styled.div`
    background: ${({ theme }) => theme.listBackground};
    border-radius: 5px;
    box-shadow: 0px 35px 50px -15px ${({ theme }) => theme.dropShadow};
    display: flex;
    justify-content: center;
    margin: ${px2rem(16)} 0 ${px2rem(40)};
    padding: ${px2rem(15)} 0 ${px2rem(19)};

    ${MEDIA.layoutShift} {
        box-shadow: unset;
        left: 50%;
        padding: ${px2rem(12)} 0;
        position: absolute;
        top: -${px2rem(11)};
        transform: translateX(-50%);
        width: 50%;
    }
`

const Item = styled.p`
    color: ${({ id, status, theme }) => status === id ? COLORS.brightBlue : theme.footerText};
    cursor: pointer;
    font-size: ${px2rem(14)};
    font-weight: 700;

    & + & {
        margin-left: ${px2rem(18)};
    }

    &:hover {
        color: ${({ id, status, theme}) => status !== id && theme.hover};
    }
`

const Instruction = styled.p`
    color: ${({ theme }) => theme.footerText};
    font-size: ${px2rem(14)};
    letter-spacing: -0.19px;
    text-align: center;

    ${MEDIA.layoutShift} {
        margin-top: ${px2rem(49)};
    }
`

export const Filter = ({ setStatus, status, todos, setTodos }) => {
    const statusHandler = (e) => {
        if (e.target.id) {
            setStatus(e.target.id)        
        }
    }

    const clearCompleteHandler = () => {
        setTodos(todos.filter((item) => !item.completed))
    }

    const itemsLeft = todos.filter(item => !item.completed).length

    return (
        <div style={{position: "relative"}}>
        <ListBottom>
            <p>{itemsLeft} items left</p>
            <Clear onClick={clearCompleteHandler}>Clear Completed</Clear>
        </ListBottom>
        <Container onClick={statusHandler}>
            <Item id="all" status={status}>All</Item>
            <Item id="active" status={status}>Active</Item>
            <Item id="completed" status={status}>Completed</Item>
        </Container>
        <Instruction>Drag and drop to reorder list</Instruction>
        </div>
    )
}