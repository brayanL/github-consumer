import { Link, Typography } from '@material-ui/core';
import React from 'react';

export default function Copyright(): JSX.Element {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                GitHub Consumer
            </Link>
            {' '}
            {new Date().getFullYear()}
            .
        </Typography>
    );
}
