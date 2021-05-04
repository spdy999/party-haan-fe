import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    margin: 0,
    padding: '70px 50px',
  },
});
export default function Layout(props: { children: React.ReactNode }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Grid item style={{ textAlign: 'center' }}>
        {props.children}
      </Grid>
    </div>
  );
}
