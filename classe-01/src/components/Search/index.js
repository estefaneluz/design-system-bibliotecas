import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStyles } from './style';
import {useState} from 'react'

export default function BasicTextFields({pesquisarPokemon}) {
  const classes = useStyles();
  const [pesquisa, setPesquisa] = useState('');

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
