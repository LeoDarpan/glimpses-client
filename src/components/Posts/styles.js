import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  [theme.breakpoints.down('sm')]: {
    noPosts: {
      flexDirection: 'column',
      width: '70%'
    }
  },
  container: {
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  loadingPaper: {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: '20px', 
    borderRadius: '15px', 
    height: 'calc(100vh - 150px)',
  },
  noPosts: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0px',
    height: '75vh',
  },
  noPostsBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: 'unset !important',
  },
  noText: {
    fontSize: '1.6rem',
    color: '#3f51b5',
    fontWeight: 'bold',
    fontFamily: 'manrope',
    textAlign: 'center',
    userSelect: 'none'
  },
  writeIcon: {
    color: '#3f51b5',
    fontSize: '2rem !important',
    userSelect: 'none'
  },
  add: {
    color: '#3f51b5',
    fontFamily: 'manrope',
    textAlign: 'center',
    userSelect: 'none',
    
  },
  underline: {
    textDecoration: 'underline',
  }
}));