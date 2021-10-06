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

    var calculate = function (s, i = 0) {
        if (!s.length) return 0;
      
        s = s.trim();
      
        // utilize a stack since u need to check the entire string for higher priority actions
        let stack = [];
        let currentNumber = 0;
        let operation = '+';
      
        while (i < s.length) {
          if (s[i] === '(') {
            i++;
            let [number, index] = calculate(s, i);
            updateStack(stack, number, operation);
            i = index++;
            operation = s[i++];
            continue;
          } else if (s[i] === ')') {
            updateStack(stack, currentNumber, operation);
            return [getResult(stack), i];
          } else {
            if (!isNaN(s[i])) currentNumber = currentNumber * 10 + s[i].charCodeAt(0) - '0'.charCodeAt(0);
            if (isNaN(s[i]) || i === s.length - 1) {
              updateStack(stack, currentNumber, operation);
              operation = s[i];
              currentNumber = 0;
            }
          }
          i++;
        }
        return setDisplayValue(getResult(stack).toString());
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
                }} data-testid='open-bracket-id'> ( </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" onClick={() => {
                    editDisplay(')');
                }} data-testid='close-bracket-id' > ) </Button>
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
                }} data-testid='exponent-id'> ^ </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" onClick={() => {
                    editDisplay('√');
                }} data-testid='square-root-id'> {'√'} </Button>
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
                }} data-testid='nine-id'> 9 </Button>
            </Grid>
            <Grid item xs={3} className={classes.digits}>
                <Button variant="contained" onClick={() => {
                    editDisplay('÷');
                }} data-testid='div-id'> ÷ </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" onClick={() => {
                    editDisplay('4');
                }}> 4 </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" onClick={() => {
                    editDisplay('5');
                }} data-testid='five-id'> 5 </Button>
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
                }} data-testid='two-id'> 2 </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" onClick={() => {
                    editDisplay('3');
                }} data-testid='three-id'> 3 </Button>
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
                <Button variant="contained" data-testid='evaluation-id' onClick={() => {
                    calculate(displayValue);
                }}> = </Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" onClick={() => {
                    editDisplay('+');
                }} data-testid='add-id'> + </Button>
            </Grid>
        </Grid>

    );
}