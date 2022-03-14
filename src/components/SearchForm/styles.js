import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  [theme.breakpoints.down('sm')]: {
      mainContainer: {
      flexDirection: 'column-reverse',
    },
  },
  appBarSearch:{
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px'
  },
}));
