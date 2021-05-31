
import {addPayload, deletePayload, showPayloads} from "./controller/payloadcontroller";
const express = require('express');
var cron = require('node-cron');

const bodyParser = require('body-parser');


const app = express();
app.set("port", 3000);

console.log("listening");


app.use(bodyParser.json());



app.put('/payload', addPayload);
app.get('/showPayloads',showPayloads);
app.delete('/payload/:id',deletePayload);
app.listen(app.get("port"));


