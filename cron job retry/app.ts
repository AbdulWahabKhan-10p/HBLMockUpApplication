import { Query } from 'mongoose';
import { PayloadModel } from './payload';
import { findRetryVal, showPayloads } from './controller/fetchcontroller';
//import {findInProcessVal} from "./controller/fetchcontroller";
const express = require('express');
var cron = require('node-cron');

const bodyParser = require('body-parser');


const app = express();
app.set("port", 3002);

console.log("listening");


app.use(bodyParser.json());


app.listen(app.get("port"), () => {
    cron.schedule('*/10 * * * * *', () => {
        console.log("running app on 3002 port");
        findRetryVal;

    });

});

app.get('/payload', showPayloads);

