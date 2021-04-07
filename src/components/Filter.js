import styled from 'styled-components'
import px2rem from '../utils/px2rem'
import { COLORS } from '../styles/colors'


const Container = styled.div`
    background: ${({ theme }) => theme.listBackground};
    border-radius: 5px;
    margin: ${px2rem(16)} 0 ${px2rem(40)};
    padding: ${px2rem(15)} 0 ${px2rem(19)};
    display: flex;
    justify-content: center;
    box-shadow: 0px 35px 50px -15px ${({ theme }) => theme.dropShadow};
    
`

const Item = styled.p`
    color: ${({ theme }) => theme.footerText};
    font-size: ${px2rem(14)};
    font-weight: 700;
    

    color: ${({ id, status }) => status === id && COLORS.brightBlue};

    & + & {
        margin-left: ${px2rem(18)};
    }    
`

const Instruction = styled.p`
    font-size: ${px2rem(14)};
    text-align: center;
    letter-spacing: -0.19px;
    color: ${({ theme }) => theme.footerText};
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
    
    return (
        <div>
        <div>
            <p onClick={clearCompleteHandler}>Clear completed</p>
        </div>
        <Container onClick={statusHandler}>
            <Item id="all" status={status}>All</Item>
            <Item id="active" status={status}>Active</Item>
            <Item id="completed" status={status}>Completed</Item>
          </Container>
        <Instruction>Drag and drop to reorder list</Instruction>
        </div>

    )
}