import { ListItem } from './ListItem'
import styled from 'styled-components'

const Container = styled.div`
    background: ${({ theme }) => theme.listBackground};
    border-radius: 5px;
`

const Ul = styled.ul`
    list-style: none;
    padding: 0;
`

export const TodoList = ({ todos, setTodos, filteredTodos, theme }) => {
    return (
        <Container>
            <Ul>
                {filteredTodos.map(todo => (
                    <ListItem 
                        key={todo.id} 
                        text={todo.text}
                        completed={todo.completed}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                        theme={theme}
                    />
                ))}
            </Ul>
        </Container>
    )
}

