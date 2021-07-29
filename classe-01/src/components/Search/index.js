import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStyles } from './style';

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Search new pokemon" variant="outlined" />
      <Button variant="contained" color="secondary">
        SEARCH
      </Button>
    </form>

  );
}
