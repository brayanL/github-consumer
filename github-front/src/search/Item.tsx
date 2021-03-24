import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Theme, withStyles } from "@material-ui/core/styles";

interface ItemProps {
  title: string,
  content: string,
  classes: any;
}

const styles = (theme: Theme) => ({
  blueText: {
    fontSize: 14,
    color: '#518CBF',
  },
  container: {
    marginBottom: 5,
  },
});

const Item = ({title, content, classes}: ItemProps): JSX.Element => (
  <Grid container direction="column" spacing={1} className={classes.container}>
    <Grid item>
      <Typography
        className={classes.blueText}
      >
        {title}
      </Typography>
    </Grid>
    <Grid item>
      <Typography>{content}</Typography>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Item);
