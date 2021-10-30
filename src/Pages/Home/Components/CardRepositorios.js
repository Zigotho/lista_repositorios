import { Card, CardContent, Grid } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// importar icone de estrela material-ui
import StarIcon from '@material-ui/icons/Star'

const useStyles = makeStyles((theme) => ({
  // Definindo o estilo do menu
  grow: {
    marginTop: theme.spacing(2)
  },
  corLinguagem: {
    width: '1em',
    height: '1em',
    borderRadius: '50%'
  },
  separador: {
    margin: theme.spacing(1, 0),
    '& > *': {
      marginRight: theme.spacing(0.6)
    }
  },
  texto: { marginRight: theme.spacing(6) }
}))

const colors = {
  Go: '#00ADB5',
  Java: '#b07219',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Php: '#4F5D95',
  C: '#178600'
}

export function CardRepositorios ({ repositorios }) {
  const classes = useStyles()

  return (
    <div>
      {repositorios?.map(repositorio => (
        <Grid key={1} item xs={12}>
          <Card className={classes.grow}>
            <CardContent>
              {/* criando H1 com href */}
              <a href={repositorio.html_url} target='_blank' rel='noopener noreferrer'> <h1>{repositorio.full_name}</h1> </a>
              <h4>{repositorio.description}</h4>
              <div className={classes.separador} style={{ display: 'flex', alignItems: 'center' }}>
                <StarIcon style={{ color: '#FFD700' }} />
                <p className={classes.texto}>{repositorio.stargazers_count} </p>

                <p className={classes.corLinguagem} style={{ backgroundColor: colors[repositorio.language] }} />
                <p className={classes.texto}>{repositorio.language}</p>

              </div>
            </CardContent>
          </Card>
        </Grid>))}
    </div>

  )
}
