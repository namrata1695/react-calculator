import React from "react";
import { Grid, Button, Collapse, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles";
import { generalFormStyles } from '../StyleObjects/generalStyles';
//import { colors } from '../helpers/styles/colors'

const useFormStyles = makeStyles(generalFormStyles);

export default function Keypad({ displayValue, setDisplayValue }) {
    const classes = useFormStyles();

    const editDisplay = (value) => {
        let str = displayValue.concat(value);
        setDisplayValue(str);
    }

    const clearDisplay = () => {
        setDisplayValue('');
    }

    const deleteLast = (textValue) => {
        setDisplayValue(textValue.substring(0, textValue.length - 1));
    }

    var evaluateExpression = function (expressionString, i = 0) {
        if (!expressionString.length) {
            return 0;
        }

        expressionString = expressionString.trim();

        let currentNumber = 0, operator = '+', stack = [];

        while (i < expressionString.length) {
            if (expressionString[i] === '(') {
                i++;
                let [number, index] = evaluateExpression(expressionString, i);
                updateStack(stack, number, operator);
                i = index++;
                operator = expressionString[i++];
            } else if (expressionString[i] === ')') {
                updateStack(stack, currentNumber, operator);
                return [getResult(stack), i];
            } else {
                if (!isNaN(expressionString[i])) {
                    currentNumber = currentNumber * 10 + expressionString[i].charCodeAt(0) - '0'.charCodeAt(0);
                }
                if (isNaN(expressionString[i]) || i === expressionString.length - 1) {
                    updateStack(stack, currentNumber, operator);
                    operator = expressionString[i];
                    currentNumber = 0;
                }
            }
            i++;
        }

        setDisplayValue(getResult(stack).toString());
    };

    const updateStack = function (stack, currentNumber, operation) {
        switch (operation) {
            case '+': stack.push(currentNumber); break;
            case '-': stack.push(-currentNumber); break;
            case '*': stack.push(stack.pop() * currentNumber); break;
            case '÷': stack.push(Math.trunc(stack.pop() / currentNumber)); break;
            case '√': stack.push(Math.sqrt(currentNumber)); break;
            case '^': stack.push(Math.pow(stack.pop(), currentNumber)); break;
        }
    }

    const getResult = function (stack) {
        return stack.reduce((a, b) => a + b);
    }

    return (
        <Grid container spacing={2} data-testid='keypad-id'>
            <Grid item xs={3}>
                <Button variant="contained" onClick={() => {
                    editDisplay('(');
                }} > ( </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" onClick={() => {
                    editDisplay(')');
                }} > ) </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" onClick={() => {
                    editDisplay('%');
                }}> % </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" onClick={() => {
                    clearDisplay();
                }} > AC </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" onClick={() => {
                    editDisplay('^');
                }}> ^ </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" onClick={() => {
                    editDisplay('√');
                }} > {'√'} </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" > log </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" onClick={() => {
                    deleteLast(displayValue);
                }}> C </Button>
            </Grid>
            <Grid item xs={3} className={classes.digits}>
                <Button variant="contained" onClick={() => {
                    editDisplay('7');
                }}> 7 </Button>
            </Grid>
            <Grid item xs={3} className={classes.digits}>
                <Button variant="contained" onClick={() => {
                    editDisplay('8');
                }}> 8 </Button>
            </Grid>
            <Grid item xs={3} className={classes.digits}>
                <Button variant="contained" onClick={() => {
                    editDisplay('9');
                }}> 9 </Button>
            </Grid>
            <Grid item xs={3} className={classes.digits}>
                <Button variant="contained" onClick={() => {
                    editDisplay('÷');
                }}> ÷ </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" onClick={() => {
                    editDisplay('4');
                }}> 4 </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" onClick={() => {
                    editDisplay('5');
                }}> 5 </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" onClick={() => {
                    editDisplay('6');
                }}> 6 </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" onClick={() => {
                    editDisplay('*');
                }}> * </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" onClick={() => {
                    editDisplay('1');
                }}> 1 </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" onClick={() => {
                    editDisplay('2');
                }}> 2 </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" onClick={() => {
                    editDisplay('3');
                }}> 3 </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" onClick={() => {
                    editDisplay('-');
                }}> - </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" onClick={() => {
                    editDisplay('0');
                }}> 0 </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" onClick={() => {
                    editDisplay('.');
                }}> . </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" onClick={() => {
                    evaluateExpression(displayValue);
                }}> = </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" onClick={() => {
                    editDisplay('+');
                }}> + </Button>
            </Grid>
        </Grid>

    );
}