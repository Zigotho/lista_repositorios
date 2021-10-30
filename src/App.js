import { Container } from '@material-ui/core'
import { Routes } from './Routes'

export function App () {
  return (
    <div className='App'>
      <Container maxWidth='lg'>
        <Routes />
      </Container>
    </div>
  )
}
