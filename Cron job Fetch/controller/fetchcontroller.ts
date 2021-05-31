import { Request, Response } from 'express';
import { PayloadModel } from '../payload';

//put /payload insert a new payload

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export let findAcceptVal = (req: Request, res: Response) => {
    PayloadModel.findOne({ value: 'Accept' }, (err: any, payload: any) => {
        if (err) {
            console.log(err);
        }
        else {
            if (payload) {
              
                if(payload.value == 'Accept')
                {
                    const number =getRandomInt(9);
                    if(number%2==0)
                    {
                        payload.value = 'complete';
                    }
                    else{
                        payload.value = 'retry';
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



