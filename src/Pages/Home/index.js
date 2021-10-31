import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import Menubar from '../../components/MenuBar'
import api from '../../service/api'
import { CardRepositorios } from './Components/CardRepositorios'

export function Home () {
  const [repositorios, setRepositorios] = useState([])
  const [search, setSearch] = useState('')

  function handleClick (string, language) {
    const searchString = search.replace(/\s/g, '+')
    api.get(`repositories?q=${searchString}&order=desc&per_page=50&page=1`).then(res => {
      setRepositorios(res.data.items)
    })
  }
  return (
    <div>
      <Menubar search={search} setSearch={setSearch} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <h1>Home</h1>
          <button onClick={() => handleClick('facebook', 'Python')}>Click</button>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container direction='column' spacing={2}>
            {repositorios.map(repo => (
              <Grid item xs={12} key={repo.id}>
                <CardRepositorios repo={repo} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
