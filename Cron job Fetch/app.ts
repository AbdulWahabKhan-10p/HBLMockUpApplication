import { Query } from 'mongoose';
import { PayloadModel } from './payload';
import { findAcceptVal } from "./controller/fetchcontroller";
const express = require('express');
var cron = require('node-cron');

const bodyParser = require('body-parser');


const app = express();
app.set("port", 3001);

console.log("listening");


app.use(bodyParser.json());

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

app.listen(app.get("port"), () => {
    cron.schedule('*/10 * * * * *', () => {
        console.log("running app on 3001 port");
        findAcceptVal;
    });

});

