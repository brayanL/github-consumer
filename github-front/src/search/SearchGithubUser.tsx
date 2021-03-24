import React from 'react';
import { Button, CircularProgress, Grid, IconButton, TextField, Tooltip } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from "@material-ui/core/styles";
import useAxios from "axios-hooks";

import GeneralInfo from "./GeneralInfo";
import Repositories from "./Repositories";
import RetryData from "../common/RetryData";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function SearchGithubUser(): JSX.Element {
  const classes = useStyles();
  const [username, setUsername] = React.useState<string>('');
  const [{data, error, loading}, fetchUser] = useAxios({ baseURL: 'https://api.github.com/' }, { manual: true });
  console.log('error: ', error?.response?.status);

  function getUserInfo() {
    fetchUser({ url: `users/${username}` });
  }

  function renderContent(): JSX.Element {
    return (
      (data && !error) && (
        <>
          <Grid item xs={12}>
            <GeneralInfo user={data} />
          </Grid>
          <Grid item xs={12}>
            <Repositories url={data.repos_url} />
          </Grid>
        </>
    ));
  }

  return (
    <div className={classes.root}>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12} lg={3}>
          <TextField
            label="Username"
            fullWidth
            margin="dense"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            InputProps={{
              endAdornment: (
                <Tooltip title="Buscar" arrow>
                  {loading
                    ? (<CircularProgress size={20} />)
                    : (
                      <IconButton
                        aria-label="search"
                        size="small"
                        onClick={getUserInfo}
                      >
                        <SearchIcon />
                      </IconButton>
                    )}
                </Tooltip>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} lg={2}>
          <Button
            fullWidth
            color="primary"
            className={classes.button}
            variant="contained"
            startIcon={<SaveIcon />}
          >
            Guardar
          </Button>
        </Grid>
      </Grid>
      <Grid container direction="column">
        {error?.response?.status === 404 && <RetryData onClickHandler={getUserInfo} />}
        {renderContent()}
      </Grid>
    </div>
  );
}
