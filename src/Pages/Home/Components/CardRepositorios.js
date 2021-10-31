import { Card, CardContent } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// importar icone de estrela material-ui
import StarIcon from '@material-ui/icons/Star'

const useStyles = makeStyles((theme) => ({
  // Definindo o estilo do menu
  grow: {
    flexGrow: 1,
    position: 'relative',
    marginTop: theme.spacing(2),
    minHeight: '40vh'
  },
  corLinguagem: {
    width: '1em',
    height: '1em',
    borderRadius: '50%'
  },
  separador: {
    margin: theme.spacing(1, 0),
    position: 'absolute',
    bottom: 0,
    '& > *': {
      marginRight: theme.spacing(0.6)
    }
  },
  texto: { marginRight: theme.spacing(6) },
  title: {
    fontSize: '1.4em',
    fontWeight: 'bold'
  },
  link: {
    textDecoration: 'none'
  },
  description: {
    fontSize: '1em',
    color: '#666'
  }

}))

// array responsavel por armazenar as cores das linguagens
const colors = {
  Go: '#00ADB5',
  Java: '#b07219',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Php: '#4F5D95',
  C: '#178600',
  'Objective-C': '#438eff',
  'C++': '#f34b7d',
  CSS: '#563d7c',
  'C#': '#178600',
  TypeScript: '#2b7489',
  Swift: '#ffac45',
  PHP: '#4F5D95',
  Scala: '#c22d40',
  'Jupyter Notebook': '#6A1B9A',
  Clojure: '#db5855',
  Hack: '#8e8058',
  Kotlin: '#F18E33',
  Ruby: '#701516',
  Lua: '#000080',
  Elixir: '#6e4a7e',
  HTML: '#e34c26',
  Dart: '#00B4AB',
  Cuda: '#6095EB',
  JavaFX: '#e34c26',
  'C++/CLI': '#f34b7d'

}

// função responsavel por renderizar o card de repositorios
export function CardRepositorios ({ repo }) {
  const classes = useStyles()

  return (
    <div>
      <Card className={classes.grow}>
        <CardContent>
          <a className={classes.link} href={repo.html_url} target='_blank' rel='noopener noreferrer'> <h2 className={classes.title}>{repo.full_name}</h2> </a>
          <h3 className={classes.description}>{repo.description}</h3>
          <div className={classes.separador} style={{ display: 'flex', alignItems: 'center' }}>
            <StarIcon style={{ color: '#FFD700' }} />
            <p className={classes.texto}>{repo.stargazers_count} </p>
            <p className={classes.corLinguagem} style={{ backgroundColor: colors[repo.language] }} />
            <p className={classes.texto}>{repo.language}</p>

          </div>
        </CardContent>
      </Card>
    </div>

  )
}
