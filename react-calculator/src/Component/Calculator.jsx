import React from "react";
import { Grid, Collapse, Typography, TextField } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles";
import { generalFormStyles } from '../StyleObjects/generalStyles';

import BasicCalculator from './BasicCalculator';
import GraphingCalculator from './GraphingCalculator';

const useFormStyles = makeStyles(generalFormStyles);

export default function Calculator() {
    const classes = useFormStyles();
    return (
        <Grid container>
            <Grid item xs={6}>
                <BasicCalculator />
            </Grid>
            <Grid item xs={6}>
                <GraphingCalculator />
            </Grid>
        </Grid>
    );
}