import { Request, Response } from 'express';
import { PayloadModel } from '../payload';

//put /payload insert a new payload


export let addPayload = (req: Request, res: Response) => {
    // req.body.instructions.forEach(element => {
    //     element.value = "Accept";
    req.body.value = "Accept";
    req.body.retry_count = '0';
    req.body.retry_interval = '3';



    const payload = new PayloadModel(req.body)
    payload.save((err: any, payload: any) => {
        if (err) {
            console.log(req.body);
            console.log(err);
            res.send(err);
        }
        else {
            res.send(payload);
        }
    });
}



//delete payload by Id
export let deletePayload = (req: Request, res: Response) => {
    PayloadModel.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("successfully deleted payload");
        }
    })
}



//get all payloads
export let showPayloads = (req: Request, res: Response) => {
    let payloads = PayloadModel.find((err: any, payload: any) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(payload);
        }
    });
}

