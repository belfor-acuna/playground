import {sendMailTo} from '../services/nodemailerService.js';

export async function sendMailController(req,res){
    const { from, message } = req.body;
    console.log("Trying to send message...")
    const response = await sendMailTo(from, message);
    if(response.sent){
        res.status(200).json({message:response.message});
    }else{
        res.status(500).json({message:response.message});
    }
}