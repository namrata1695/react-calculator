import React from "react";
import { Grid, Button, Collapse, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles";
import { generalFormStyles } from '../StyleObjects/generalStyles';
//import { colors } from '../helpers/styles/colors'

const useFormStyles = makeStyles(generalFormStyles);

export default function Keypad() {
    const classes = useFormStyles();
    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <Button variant="contained" > ( </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" > ) </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" > % </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" > AC </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" > 7 </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" > 8 </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" > 9 </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" > / </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" > 4 </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" > 5 </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" > 6 </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" > * </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" > 1 </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" > 2 </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" > 3 </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" > - </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" > 0 </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" > . </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" > = </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" > + </Button>
            </Grid>
        </Grid>

    );
}