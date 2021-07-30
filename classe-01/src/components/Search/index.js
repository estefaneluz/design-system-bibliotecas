import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStyles } from './style';

export default function BasicTextFields({pesquisa, setPesquisa, pesquisarPokemon}) {
  const classes = useStyles();

  function handelSubmit(e){
    e.preventDefault();
    pesquisarPokemon(pesquisa);
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => handelSubmit(e)}>
      <TextField id="outlined-basic" label="Search new pokemon" variant="outlined" 
      onChange={(e) => setPesquisa(e.target.value)} />
      <Button variant="contained" color="secondary" onClick={(e) => handelSubmit(e)}>
        SEARCH
      </Button>
    </form>

  );
}
