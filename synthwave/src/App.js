import Title from './components/Title'
import Box from './components/Box'
import About from './components/About'
import Music from './components/Music'
import Code from './components/Code'

import './css/App.css'
import './css/CRT.css'

function App() {
  return (
    <div className='App'>
      <Title></Title>
      <Box>
        <About></About>
      </Box>
      <Box>
        <Code></Code>
      </Box>
      <Box>
        <Music></Music>
      </Box>
      <br /><br />
    </div>
  );
}

export default App
