import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Todo } from './components/Todo'
import { TodoList } from './components/TodoList'
import { Filter } from './components/Filter'
import { initialTodos } from './initialTodos'
import { useDarkMode } from './styles/useDarkMode'
import { useWindowSize } from './styles/useWindowSize'
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles'
import styled, { ThemeProvider } from 'styled-components'
import px2rem from './utils/px2rem'

const Container = styled.div`
  max-width: ${px2rem(540)};
  margin: 0 auto;
`

function App() {

  const getTheme = () => {
    const localTheme = localStorage.getItem('theme')
    return localTheme ? localTheme : "dark" 
  }

  const [ theme, toggleTheme ] = useDarkMode(getTheme)
  const themeMode = theme === 'dark' ? darkTheme : lightTheme 

  const width = useWindowSize()

  const [ inputText, setInputText ] = useState("")
  const [ todos, setTodos ] = useState(initialTodos)
  const [ status, setStatus ] = useState("all")
  const [ filteredTodos, setFilteredTodos ] = useState([])

  // Run once when the app start
  useEffect(() => {
    getLocalTodos()
  }, [])
  
  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break
      case 'active':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
    }
  }

  // Save to local storage
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
  }
  const getLocalTodos = () => {
      if (localStorage.getItem('todos') === null) {
        localStorage.setItem('todos', JSON.stringify([]))

      } else {
        let todoLocal = JSON.parse(localStorage.getItem('todos'))
        setTodos(todoLocal)
      }
  }
  
  return (
    <ThemeProvider theme={themeMode}>
      <Container>
      <GlobalStyles width={width} />
        <Header theme={theme} toggleTheme={toggleTheme}/>
        <Todo 
          inputText={inputText} 
          setInputText={setInputText} 
          todos={todos} 
          setTodos={setTodos}
          setStatus={setStatus}
          />
        <TodoList 
          theme={theme} 
          todos={todos} 
          setTodos={setTodos}
          filteredTodos={filteredTodos}
          />
        <Filter 
          theme={theme} 
          status={status} 
          setStatus={setStatus}
          todos={todos}
          setTodos={setTodos}
          />
      </Container>
    </ThemeProvider>
    
  );
}

export default App;
