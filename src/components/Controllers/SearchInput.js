import React from 'react'
import { InputBase, alpha } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),

    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25)

    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: 'auto',
    // definindo o tamanho do input quando a tela for maior que md
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%'
  }
}))

export function SearchInput ({ setPage, setSearch, handleSearch, searchWidth }) {
  const classes = useStyles()
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder='Procurar'
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            handleSearch(e.target.value)
            setPage(1)
          }
        }}
        onChange={(e) => setSearch(e.target.value)}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  )
}
