import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

import { Grid, Button, Collapse, Typography, TextField } from '@material-ui/core'
import BasicCalculator from './BasicCalculator';
import GraphingCalculator from './GraphingCalculator';
import { Footer } from './Footer';
import { generalFormStyles } from '../StyleObjects/generalStyles';
import axios from 'axios';
import parse from 'html-react-parser';
const useFormStyles = makeStyles(generalFormStyles);


export default function Calculator() {
    const classes = useFormStyles();
    const [wtiPrice, setWtiPrice] = useState([]);
    //const { getByTestId } = render(<BasicCalculatorWithProps />);
    const getWTIPrice = () => {
        //const { getByClass } = render(<div class="oilprices__centercolumn">79.08</div>);
        const requestOptions = {
            //mode: 'no-cors',
            //mode: 'cors',
            method: 'GET',
            Accept: '*/*',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'AccessControlAllowOrigin': '*',
                'AccessControlAllowMethods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
            },
            OPTIONS: '',
            AccessControlRequestMethod: 'GET',
            AccessControlRequestHeaders: 'origin',
            Origin: 'https://oilprice.com',
            //AccessControlAllowOrigin : '*',
            //AccessControlAllowMethods: 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            //AccessControlAllowHeaders: 'Origin, Content-Type, X-Auth-Token',

        };

        axios.get(`/oil-price-charts/45`)
            .then((res) => {
                //console.log('response ' + typeof res.data);
                var parser = new DOMParser();
                var htmldoc = parser.parseFromString(res.data, 'text/html');
                console.log('htmldoc ' + htmldoc.getElementsByClassName('last_price')[0].innerHTML);
                let wtiPrice = htmldoc.getElementsByClassName('last_price')[0].innerHTML;
                setWtiPrice(wtiPrice);
            })
            .catch((error) => {
                //setWtiPrice(error)
                //setWtiPrice(error);
                console.log('error' + error);
            });
        //const container = getByClass('oilprices__centercolumn');
        //setWtiPrice(parse("<td class='last_price' data-price='79.08'>79.08</td>"));
    }

    return (
        <Grid container className={classes.customBackground}>
            <Grid item xs={6}>
                <BasicCalculator />
            </Grid>
            <Grid item xs={6}>
                <GraphingCalculator />
            </Grid>
            <Grid item xs={5} className={classes.wtiBackground}>
                <Typography variant="h4" component="h2" className={classes.wtilabel}>
                    The WTI price of crude oil
                </Typography>
            </Grid>
            <Grid item xs={2} className={classes.wtiBackground}>
                <Button className={classes.wtibutton} variant="contained" size="medium" onClick={() => {
                    getWTIPrice();
                }}> Get WTI Price </Button>
            </Grid>
            <Grid item xs={2} className={classes.wtiBackground}>
                {wtiPrice ? <TextField className={classes.wtiprice} id="standard-basic" label="" variant="standard" value={wtiPrice} /> : null}
            </Grid>
            <Grid item xs={2} className={classes.wtiBackground}>
                </Grid>
                <Grid item xs={1} className={classes.wtiBackground}>
                </Grid>
            <Grid item xs={12}>
                <Footer />
            </Grid>
        </Grid>
    );
}