import { Grid, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import Menubar from '../../components/MenuBar'
import api from '../../service/api'
import { CardRepositorios } from './Components/CardRepositorios'
import Pagination from '../../components/Pagination'
import FilterList from '../../components/FilterList'
import CircularProgress from '@material-ui/core/CircularProgress'

export function Home () {
  const [repositorios, setRepositorios] = useState([])
  const [search, setSearch] = useState('')
  const [searched, setSearched] = useState('')
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const [languages, setLanguages] = useState([])
  const [loading, setLoading] = useState(false)

  function handleSearch () {
    setLoading(true)
    let searchString = search.replace(/\s/g, '+')
    setSearched(searchString)
    languages.map(language => {
      searchString += `+language:${language}`
      return searchString
    })
    api.get(`repositories?q=${searchString}&order=desc&per_page=50&page=${page}`).then(res => {
      setRepositorios(res.data.items)
      setTotal(Math.ceil(res.data.total_count / res.data.items.length))
      setTotalCount(res.data.total_count)
      setLoading(false)
    }).catch(err => {
      console.log(err)
      setLoading(false)
    })
  }

  useEffect(() => {
    handleSearch(search)
  }, [page, languages])

  return (
    <div>
      <Menubar />
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <FilterList languages={languages} setLanguages={setLanguages} setPage={setPage} setSearch={setSearch} handleSearch={handleSearch} search={search} />
        </Grid>
        {loading
          ? (
            <Grid item xs={12} md={9}>
              <CircularProgress style={{ position: 'absolute', top: '50%', left: '50%' }} />
            </Grid>
            )
          : (
            <Grid item xs={12} md={9}>
              <Grid container spacing={3}>
                <Grid style={{ position: 'relative' }} item xs={12}>
                  <Pagination maxPages={total} page={page} setPage={setPage} />
                </Grid>
                <Grid item justifyContent='center' alignItems='center' alignContent='center' xs={12}>
                  <Typography variant='h5' align='center'>
                    {totalCount.toLocaleString()} repositórios encontrados para " {searched} "
                  </Typography>
                </Grid>
              </Grid>
              <Grid container direction='row' spacing={2}>
                {repositorios.map(repo => (
                  <Grid item xs={12} md={4} key={repo.id}>
                    <CardRepositorios repo={repo} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            )}

      </Grid>
    </div>
  )
}
