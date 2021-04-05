import { Header } from './components/Header'
import { useDarkMode } from './styles/useDarkMode'
import { useWindowSize } from './styles/useWindowSize'
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles'
import styled, { ThemeProvider } from 'styled-components'
import px2rem from './utils/px2rem'

// Remove??
const Container = styled.div`
  max-width: ${px2rem(540)};
  margin: 0 auto;
`

function App() {
  const [ theme, toggleTheme ] = useDarkMode()
  const themeMode = theme === 'dark' ? darkTheme : lightTheme 

  const width = useWindowSize()

  return (
    <ThemeProvider theme={themeMode}>
      <Container>
      <GlobalStyles width={width} />
      
        <Header theme={theme} toggleTheme={toggleTheme}/>
      </Container>
    </ThemeProvider>
    
  );
}

export default App;
