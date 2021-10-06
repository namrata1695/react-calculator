import React from "react";
import { Grid, Collapse, Typography } from '@material-ui/core'
import { classExpression } from "@babel/types";
import { makeStyles } from "@material-ui/styles";
import { generalFormStyles } from '../StyleObjects/generalStyles';

const useFormStyles = makeStyles(generalFormStyles);

export function Footer() {
    const classes = useFormStyles();
    return (
        <div className={` ${classes.footer}`}>
            <div className={classes.footer}>
                @2021
            </div>       </div>
    );
}