import { Card, CardContent } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { SearchInput } from './Controllers/SearchInput'
import { LanguageSearch } from './Controllers/LanguageSearch'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
    backgroundColor: theme.palette.background.paper
  },
  card: { backgroundColor: '#cdcdcd' },
  nested: {
    paddingLeft: theme.spacing(4)
  },

  linguages: {
    marginTop: theme.spacing(6)
  }
}))

const languagesFilter = [
  {
    name: 'JavaScript',
    value: 'javascript',
    color: '#f1e05a'
  },
  {
    name: 'Python',
    value: 'python',
    color: '#3572A5'
  },
  {
    name: 'Java',
    value: 'java',
    color: '#b07219'

  },
  {
    name: 'Swift',
    value: 'swift',
    color: '#ffac45'
  },
  {
    name: 'C++',
    value: 'c++',
    color: '#f34b7d'
  }
]

function FilterList ({ setPage, setSearch, handleSearch, search, languages, setLanguages }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <SearchInput setPage={setPage} setSearch={setSearch} handleSearch={handleSearch} />
          <div className={classes.linguages}>
            <LanguageSearch
              languages={languages}
              setLanguages={setLanguages}
              setPage={setPage}
              languagesFilter={languagesFilter}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default FilterList
