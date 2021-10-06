import React, { useState } from "react";
import { Grid, Collapse, Typography, TextField } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles";
import { generalFormStyles } from '../StyleObjects/generalStyles';
//import { colors } from '../helpers/styles/colors'
import Keypad from './Keypad'

const useFormStyles = makeStyles(generalFormStyles);

export default function BasicCalculator() {
    const classes = useFormStyles();
    const [displayValue, setDisplayValue] = useState('');
    return (
        <Grid className={classes.calculatorBorder}>
            <Typography variant="h4">Basic Calculator</Typography>
            <TextField 
            id="outlined-basic" 
            label="" 
            variant="outlined" 
            value={displayValue} 
            className={classes.calcButton}
            autoFocus
            />
            <Keypad displayValue= {displayValue} setDisplayValue={setDisplayValue}/>
        </Grid>

    );
}