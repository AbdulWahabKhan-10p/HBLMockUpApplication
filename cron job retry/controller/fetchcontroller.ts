import { Request, Response } from 'express';
import { PayloadModel } from '../payload';

//put /payload insert a new payload

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export let findRetryVal = (req: Request, res: Response) => {
    PayloadModel.findOne({ value: 'retry' }, (err: any, payload: any) => {
        if (err) {
            console.log(err);
        }
        else {
            if (payload) {
                if (payload.retry_interval == payload.retry_count) {
                    payload.value = 'failure'
                }
                else {
                    const number = getRandomInt(9);
                    if (number % 2 == 0) {
                        payload.value = 'complete';
                    }
                    else {
                        payload.retry_count++;
                    }
                }
                const pay = new PayloadModel(payload)
                pay.save((err: any, payload: any) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log("saved");
                    }
                });
            }
        }
    });



}

export let showPayloads = (req: Request, res: Response) => {
    let payloads = PayloadModel.find({ value: 'complete' }, (err: any, payload: any) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(payload);
        }
    });
}


