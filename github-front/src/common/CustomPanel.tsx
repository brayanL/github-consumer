import React from 'react';
import { Theme, withStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from "@material-ui/core";
import clsx from "clsx";

const styles = (theme: Theme) => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing(2),
    marginTop: 20,
    [theme.breakpoints.up('md')]: {
      paddingLeft: 50,
      paddingRight: 50,
    },
  },
  titleContainer: {
    backgroundColor: theme.palette.primary.main,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
  },
  title: {
    color: theme.palette.common.white,
    fontFamily: 'Roboto-Light',
    paddingLeft: 10,
    fontSize: 20,
  },
  gridContainer: {
    padding: 10,
  },
});

interface CustomPanelProps {
  classes: any;
  title: string;
  children: JSX.Element;
}

const CustomPanel = ({classes, children, title}: CustomPanelProps): JSX.Element => (
  <div className={classes.root}>
    <Box
      display="flex"
      border={1}
      borderColor="primary.main"
      bgcolor="background.paper"
      borderRadius={15}
    >
      <Grid container direction="column">
        <Grid
          container
          direction="row"
          className={clsx(classes.titleContainer, classes.gridContainer)}
        >
          <Typography variant="h4" className={classes.title}>{title}</Typography>
        </Grid>
        <Grid container direction="column" className={classes.gridContainer}>
          {children}
        </Grid>
      </Grid>
    </Box>
  </div>
);

export default withStyles(styles)(CustomPanel);
