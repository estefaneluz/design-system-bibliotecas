import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: `2vh 0`,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
    },
}));