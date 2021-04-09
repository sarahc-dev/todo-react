import styled from 'styled-components'
import { ListItem } from './ListItem'

const Container = styled.div`
    background: ${({ theme }) => theme.listBackground};
    border-radius: 5px 5px 0 0;
`

const Ul = styled.ul`
    list-style: none;
    margin-bottom: 0;
    padding: 0;
`

export const TodoList = ({ todos, setTodos, filteredTodos, theme }) => {
    return (
        <Container>
            <Ul>
                {filteredTodos.map(todo => (
                    <ListItem 
                        completed={todo.completed}
                        key={todo.id} 
                        setTodos={setTodos}
                        text={todo.text}
                        theme={theme}
                        todo={todo}
                        todos={todos}
                    />
                ))}
            </Ul>
        </Container>
    )
}

