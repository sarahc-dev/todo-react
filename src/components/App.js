import { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles, lightTheme, darkTheme } from '../styles/globalStyles'
import { Header } from './Header'
import { Todo } from './Todo'
import { TodoList } from './TodoList'
import { Filter } from './Filter'
import { useDarkMode } from '../styles/useDarkMode'
import { useWindowSize } from '../styles/useWindowSize'
import { initialTodos } from '../initialTodos'

const Container = styled.div`
  margin: 0 auto;
  max-width: 540px;
`

function App() {

  // Get local theme, else default is "dark"
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

  // Run once when the app starts
  useEffect(() => {
    getLocalTodos()
  }, [])
  
  // Runs each time todos or status is updated. Ignoring warning to keep functions separate
  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])

  // Filters todos
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed))
        break
      case 'active':
        setFilteredTodos(todos.filter(todo => !todo.completed))
        break
      default:
        setFilteredTodos(todos)
    }
  }

  // Save to and get todos from local storage
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
          setFilteredTodos={setFilteredTodos}
          />
        <Filter 
          theme={theme} 
          status={status} 
          setStatus={setStatus}
          todos={todos}
          setTodos={setTodos}
          />

        <div style={{color: "cornflowerBlue", marginTop: "4rem", textAlign: "center"}}>
          Challenge by <a style={{color: "cornflowerBlue"}} href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. Coded by <a style={{color: "cornflowerBlue"}}
          href="https://www.sarahclements.me">Sarah</a> 🐳 .
        </div>

      </Container>
    </ThemeProvider>
  );
}

export default App;
