import { Header } from './components/Header'
import { Toggle } from './components/Toggle'
import { useDarkMode } from './styles/useDarkMode'
import { useWindowSize } from './styles/useWindowSize'
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles'
import styled, { ThemeProvider } from 'styled-components'

// Remove??
const Container = styled.div`
  max-width: 50%;
  margin: 2rem auto;
`;

function App() {
  const [ theme, toggleTheme ] = useDarkMode()
  const themeMode = theme === 'dark' ? darkTheme : lightTheme 

  const width = useWindowSize()

  return (
    <ThemeProvider theme={themeMode}>
      <Container>
        <GlobalStyles width={width} />
        <div>
        <h1>TODO</h1>
        <Toggle theme={theme} toggleTheme={toggleTheme}/>
        </div>
        
        
      </Container>
    </ThemeProvider>
    
  );
}

export default App;
