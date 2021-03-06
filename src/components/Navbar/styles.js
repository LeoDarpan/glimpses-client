import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  [theme.breakpoints.down('sm')]: {
    appHeading: {
      fontSize: '1rem',
    },
    appBar:{
      padding: '0px 10px !important',
    }
  },
  [theme.breakpoints.down('md')]: {
    appHeading: {
      fontSize: '1.5rem',
    },
    appBar:{
      padding: '0px 10px !important',
    }
  },
  appHeading: {
    textTransform: 'uppercase',
    fontFamily: 'Manrope',
    textDecoration:'none',
    color: '#3f51b5',
    fontSize: '2.1rem',
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  appBar: {
    margin: '30px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 20px',
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
    alignItems: 'center',
  },
  user: {
    display: 'flex',
    cursor: "pointer",
    position: 'relative',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    marginInline: '10px',
    fontFamily: 'Manrope',
    fontSize: '1.3rem',
    color: '#3f51b5',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: "#3f51b5",
  },
  link: {
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex',
    padding: '5px',
  }
}));
