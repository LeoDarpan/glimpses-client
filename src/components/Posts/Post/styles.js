import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    padding: '10px'
  },
  media: {
    height: '40%',
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'block',
  },
  title: {
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 'auto'
  },
  cardContent: {
    minHeight: '40%',
    padding: '10px',
    margin: 'unset',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  details: {
    marginBottom: '10px'
  }
});