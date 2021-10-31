import { Divider } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(theme => ({
  separador: {
    margin: theme.spacing(1, 0),
    height: '1.5em',
    cursor: 'pointer',
    '& > *': {
      marginRight: theme.spacing(0.6)
    }
  },
  corLinguagem: {
    width: '1em',
    height: '1em',
    borderRadius: '50%'
  },
  texto: { marginRight: theme.spacing(6) },
  teste: { backgroundColor: '#1f6feb', color: '#c9d1d9', borderRadius: '6px' }

}))

export function LanguageSearch ({ languagesFilter, setPage, languages, setLanguages }) {
  const classes = useStyle()

  function handleChange (event) {
    setPage(1)
    // verifica se a linguagem ja foi adicionada ao filtro
    const language = languages.find(item => item === event.target.id)
    if (!language) {
      // adiciona a linguagem ao filtro
      setLanguages([...languages, event.target.id])
    } else {
      // remove a linguagem do filtro
      setLanguages(languages.filter(item => item !== event.target.id))
    }
  }
  return (
    <div>
      {languagesFilter.map((language, index) => (
        <div key={index}>
          <Divider component='div' />
          <div
            onClick={(e) => handleChange(e)}
            className={`${classes.separador}  ${(languages.find(item => item === language.value)) ? classes.teste : ''}`}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <div className={classes.corLinguagem} style={{ backgroundColor: language.color }} />
            <span id={language.value} className={classes.texto}>{language.name}</span>
          </div>
        </div>
      ))}
    </div>

  )
}
