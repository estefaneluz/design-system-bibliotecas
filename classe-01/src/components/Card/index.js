import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import { useStyles } from './style';

export default function RecipeReviewCard({pokemon}) {
  const classes = useStyles();
  const {image, name, abilities} = pokemon;

  return (
    <Card>
      <CardHeader
        className={classes.header}
        title={name}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography variant="h6" component="h2">
          Abilities
        </Typography>
        {abilities.map(a => (
          <ListItemText key={a.ability.name} className={classes.list} primary={a.ability.name} />
        ))}
      </CardContent>
    </Card>
  );
}
