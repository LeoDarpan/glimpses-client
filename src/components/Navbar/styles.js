import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  [theme.breakpoints.down('sm')]: {
    appHeading: {
      fontSize: '1rem',
    }
  },
  appHeading: {
    textTransform: 'uppercase',
    fontFamily: 'Manrope',
    textDecoration:'none',
    color: '#3f51b5'
  },
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 'auto',
  },
  user: {
    display: 'flex'
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    marginInline: '10px'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));