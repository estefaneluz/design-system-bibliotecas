import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStyles } from './style';

export default function BasicTextFields({setErro, pesquisa, setPesquisa, pesquisarPokemon}) {
  const classes = useStyles();

  function handelSubmit(e){
    e.preventDefault();
    pesquisarPokemon(pesquisa);
  }

  function handleSearch(e){
    setErro('');
    setPesquisa(e.target.value)
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => handelSubmit(e)}>
      <TextField id="outlined-basic" label="Search new pokemon" variant="outlined" 
      onChange={(e) => handleSearch(e)} />
      <Button variant="contained" color="secondary" onClick={(e) => handelSubmit(e)}>
        SEARCH
      </Button>
    </form>

  );
}
