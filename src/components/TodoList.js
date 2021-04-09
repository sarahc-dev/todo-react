import styled from 'styled-components'
import { ListItem } from './ListItem'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
    background: ${({ theme }) => theme.listBackground};
    border-radius: 5px 5px 0 0;
    transition: background 1s;
`

const Ul = styled.ul`
    list-style: none;
    margin-bottom: 0;
    padding: 0;
`

export const TodoList = ({ todos, setTodos, filteredTodos, setFilteredTodos, theme }) => {

    const handleOnDragEnd = (result) => {
        const { destination, source } = result

        if (!destination) return
        
        if (destination.index === source.index) return

        const items = Array.from(todos)
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)

        setTodos(items)
        // updating filtered todos as well stops flicker, but maintains new order when filtering
        setFilteredTodos(items)
    }

    return (
        <Container>
        <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="list">
            {(provided) => (
                <Ul className="list" 
                ref={provided.innerRef} 
                {...provided.droppableProps} >
                {filteredTodos.map((todo, index) => (
                    <ListItem 
                        completed={todo.completed}
                        key={todo.id} 
                        setTodos={setTodos}
                        text={todo.text}
                        theme={theme}
                        todo={todo}
                        todos={todos}
                        index={index} 
                    /> 
                ))}
                {provided.placeholder}
            </Ul>
            )}
        </Droppable>
        </DragDropContext>
        </Container>
    )
}

