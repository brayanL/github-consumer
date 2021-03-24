/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import MoodBadIcon from '@material-ui/icons/MoodBad';

const useStyles = makeStyles((_) => ({
  root: {
    flexGrow: 1,
  },
}));

interface RetryDataProps {
  onClickHandler: () => void,
}

/**
 * Useful when you require show info or message if the current request fail.
 * @param onClickHandler dispatch an action
 * */
export default function RetryData({ onClickHandler }: RetryDataProps): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '65vh' }}
      >
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <MoodBadIcon />
          <p>No se pudo obtener la informacion solicitada.</p>
          {onClickHandler && (
            <Link component="button" onClick={onClickHandler}>
              <p>Retry</p>
            </Link>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

RetryData.defaultProps = {
  onClickHandler: undefined,
};

RetryData.propTypes = {
  onClickHandler: PropTypes.func,
};
