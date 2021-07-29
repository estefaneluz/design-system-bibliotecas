import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import { useStyles } from './style';

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Pikachu"
      />
      <CardMedia
        className={classes.media}
        image=""
        title="Pikachu"
      />
      <CardContent>
        <Typography variant="h6" component="h2">
            Abilities
        </Typography>
        <ListItemText className={classes.list} primary={"Habilidade 1"} />
        <ListItemText className={classes.list} primary={"Habilidade 2"} />
      </CardContent>
    </Card>
  );
}
