import './app.scss'
import { HashRouter } from 'react-router-dom'
import { Router } from './routes/router'
import Main from './layout/main/Main'

function App() {
  return (
    <HashRouter>
      <Main>
        <Router />
      </Main>
    </HashRouter>
  )
}

export default App
