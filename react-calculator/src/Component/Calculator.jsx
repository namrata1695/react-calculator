import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Grid, Button, Collapse, Typography, TextField } from '@material-ui/core'
import BasicCalculator from './BasicCalculator';
import GraphingCalculator from './GraphingCalculator';
import { Footer } from './Footer';
import { generalFormStyles } from '../StyleObjects/generalStyles';

const useFormStyles = makeStyles(generalFormStyles);

export default function Calculator() {
    const classes = useFormStyles();
    return (
        <Grid container className={classes.customBackground}>
            <Grid item xs={6}>
                <BasicCalculator />
            </Grid>
            <Grid item xs={6}>
                <GraphingCalculator />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" > WTI </Button>
            </Grid>
            <Grid item xs={12}>
                <Footer />
            </Grid>
        </Grid>
    );
}