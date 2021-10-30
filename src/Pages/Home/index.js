import { Grid } from '@material-ui/core'
import React from 'react'
import Menubar from '../../components/MenuBar'
import api from '../../service/api'
import { CardRepositorios } from './Components/CardRepositorios'

export function Home () {
  const [repositorios, setRepositorios] = React.useState([])
  function handleClick () {
    console.log('clicked')
    api.get('repositories?q=facebook&sort=stars&order=desc&per_page=50&page=2').then(res => {
      console.log(res.data)
      setRepositorios(res.data.items)
    })
  }
  return (
    <div>
      <Menubar />
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <h1>Home</h1>
          <button onClick={handleClick}>Click</button>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container direction='column' spacing={3}>
            <Grid item xs={12}>
              <CardRepositorios repositorios={repositorios} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
