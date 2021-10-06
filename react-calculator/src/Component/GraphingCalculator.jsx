import React, { useEffect, useRef } from "react";
import { Grid, Collapse, Typography, TextField } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles";
import { generalFormStyles } from '../StyleObjects/generalStyles';
import Desmos from 'desmos';

const useFormStyles = makeStyles(generalFormStyles);

export default function GraphingCalculator() {
    const classes = useFormStyles();
    const graphRef = useRef(null);
    useEffect(()=> {
        if(graphRef.current) {
            let calculator = Desmos.GraphingCalculator(graphRef.current);
            calculator.setExpression({id:'graph1', latex:''});
        }
    },[])
    return (
        <Grid className={classes.graphingCalculator}>
            <Typography variant="h4">Graphing Calculator</Typography>
            <div id="graphingCalculator" className={classes.graphingCalculator} ref={graphRef} />
        </Grid>
    );
}