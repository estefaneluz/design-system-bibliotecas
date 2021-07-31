import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      marginBottom: '1vh'
    },
    header: {
      textAlign: 'center',
    },
    media: {
      paddingTop: '100%',
    },
    list: {
      fontSize: 10,
      color: '#a9a9a9'
    }
}));