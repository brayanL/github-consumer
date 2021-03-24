import CustomPanel from "../common/CustomPanel";
import React from "react";
import { User } from "../types/user";
import { Avatar, Grid } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Item from "./Item";

const useStyles = makeStyles((theme: Theme) => ({
  sizeAvatar: {
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      width: 'auto',
    },
    [theme.breakpoints.up('md')]: {
      height: theme.spacing(20),
      width: theme.spacing(20),
    },
  },
}));

interface GeneralInfoProps {
  user: User,
}

export default function GeneralInfo({ user }: GeneralInfoProps): JSX.Element {
  const classes = useStyles();

  return (
    <CustomPanel title="General Info">
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12} lg={2}>
          <Avatar
            variant="rounded"
            alt="user avatar"
            src={user.avatar_url}
            className={classes.sizeAvatar}
          />
        </Grid>
        <Grid container item xs={12} lg={4} spacing={1}>
          <Item title="Name" content={user.name} />
          <Item title="Company" content={user.company} />
          <Item title="Bio" content={user.bio} />
        </Grid>
        <Grid container item xs={12} lg={4} spacing={1}>
          <Item title="Followers" content={user.followers.toString()} />
          <Item title="Following" content={user.following.toString()} />
          <Item title="Public Repos" content={user.public_repos.toString()} />
        </Grid>
      </Grid>
    </CustomPanel>
  );
}
