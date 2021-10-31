import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  // definindo o Ul em linha e sem ponto
  root: {
    '& > *': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(1)
    }
  },
  grow: {
    flexGrow: 1
  },
  li: {
    display: 'inline',
    listStyle: 'none',
    '&:not(:last-child)': {
      marginRight: '2em'
    }
  },
  a: {
    color: '#fff',
    fontSize: '1.3em',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
}))

function Pagination ({ maxPages, page, setPage }) {
  const classes = useStyles()
  function nextPage () {
    console.log('nextPage')
    if (page < maxPages) {
      setPage(page + 1)
    }
  }

  function prevPage () {
    console.log('prevPage')
    if (page > 1) {
      setPage(page - 1)
    }
  }
  function setPageNumber (pageNumber) {
    console.log('setPageNumber', pageNumber)
    setPage(pageNumber)
  }

  return (
    <div className={classes.root}>
      <ul className={classes.ul}>
        <li onClick={prevPage} className={classes.li}><a className={classes.a}>Voltar</a></li>

        {maxPages > 0
          ? Array(maxPages)?.fill(0, page - 2 <= 0 ? 0 : page - 3, page + 2)?.map((_, index) => (
            <li onClick={() => setPageNumber(index + 1)} className={classes.li} key={index}><a className={classes.a} href={index + 1 === page ? '#' : null}>{index + 1}</a></li>
            ))
          : null}
        <li onClick={nextPage} className={classes.li}><a className={classes.a}>Próxima</a></li>
      </ul>

    </div>
  )
}

export default Pagination
