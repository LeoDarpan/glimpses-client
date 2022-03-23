import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'contain',
    width: '100%',
    height: '100%',
  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column-reverse',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '20px',
    height: '500px',
    width: '600px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      height: '100%',
      width: '100%',
    },
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
  },
  heading: {
    color: '#3f51b5'
  },
  mb:{
    marginBottom: '10px'
  },
  commentsOuterContainer: {
    display: 'flex', justifyContent: 'space-between',
  },
  commentsInnerContainer: {
    height: '200px', overflowY: 'auto', marginRight: '30px', padding: '10px'
  },
  loginMessage: {
    fontFamily: 'Manrope',
    fontWeight: 'bold',
    padding: '10px'
  },
  recImage: {
    objectFit: 'cover',
    borderRadius: '20px'
  }
}));