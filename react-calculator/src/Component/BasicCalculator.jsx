import React from "react";
import { Grid, Collapse, Typography, TextField } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles";
import { generalFormStyles } from '../StyleObjects/generalStyles';
//import { colors } from '../helpers/styles/colors'
import Keypad from './Keypad'

const useFormStyles = makeStyles(generalFormStyles);

export default function BasicCalculator() {
    const classes = useFormStyles();
    return (
        <Grid className={classes.calculatorBorder}>
            <TextField id="outlined-basic" label="" variant="outlined" value='0' className={classes.calcButton}/>
            <Keypad />
        </Grid>

    );
}