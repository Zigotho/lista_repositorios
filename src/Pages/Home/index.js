import { Grid } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import Menubar from '../../components/MenuBar'
import api from '../../service/api'
import { CardRepositorios } from './Components/CardRepositorios'
import Pagination from '../../components/Pagination'

export function Home () {
  const [repositorios, setRepositorios] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)

  function handleSearch () {
    const searchString = search.replace(/\s/g, '+')
    api.get(`repositories?q=${searchString}&order=desc&per_page=50&page=${page}`).then(res => {
      console.log(res.data)
      setRepositorios(res.data.items)
      setTotal(Math.ceil(res.data.total_count / res.data.items.length))
    })
  }

  useEffect(() => {
    handleSearch()
  }, [page])
  return (
    <div>
      <Menubar setPage={setPage} setSearch={setSearch} handleSearch={handleSearch} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Grid container direction='column' spacing={2}>
            <Pagination maxPages={total} page={page} setPage={setPage} />
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
