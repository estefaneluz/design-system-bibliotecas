import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    header: {
      textAlign: 'center',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    list: {
      fontSize: 14,
      color: '#a9a9a9'
    }
}));