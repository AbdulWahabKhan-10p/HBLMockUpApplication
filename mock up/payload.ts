import * as mongoose from "mongoose";

const uri: string = 'mongodb://127.0.0.1:27017/local';
mongoose.connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  }
  else {
    console.log("successfully connected to mongodb");
  }
});

export const payloadSchema = new mongoose.Schema(
  {
    batchId: String,
    valueDate: String,
    nbOfTxs: String,
    amount: Object,
    value: String,
    retry_interval: String,
    retry_count: String,
    instructions: [
      {
        amount: Object,
        purposeCode: String,
        instructionId: String,
        creditor: {
          identification: Object,
          iban: String,
          name: String,
        },
        cdtrBank: String,
        debtor: Object,
        instrForCdtrBank: String,
        rmtInf: String,
      }
    ]
  }


);

export const PayloadModel = mongoose.model('payload', payloadSchema);
