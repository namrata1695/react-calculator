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
        /*if(graphRef.current) {
            let calculator = Desmos.GraphingCalculator(graphRef.current);
            calculator.setExpression({id:'graph1', latex:'y=x^2'});
        }*/
    },[])
    return (
        /* <div className={classes.formSectionMargin}>
            <h1 className={classes.heading}>
                Hello, I am Namrata Ajmeri
            </h1>
            <p className={classes.subInformation}>
                I am a full-stack developer. <br />
                <span className={classes.skillsHighlight}>My skillset ranges from design (Html + CSS) to JavaScript, TypeScript, ReactJS ,
                    all the way to C#, Java, SQL.</span>
            </p>
        </div> */
        <Grid className={classes.outlerlayout}>
            <div id="graphingCalculator" className={classes.graphingCalculator} ref={graphRef} />
        </Grid>

    );
}