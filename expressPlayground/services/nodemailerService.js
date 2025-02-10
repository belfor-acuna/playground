import refreshTransport from "../config/mailerConfig.js";



export async function sendMailTo(from,message) {
    try{
      const transporter = await refreshTransport();
      console.log('Transporter: ',transporter);
      const info = await transporter.sendMail({
        from: from,
        to: "Belfor Acuna <b.acuna.cas@gmail.com>",
        subject: "Portfolio incoming message",
        text: `Hey there! Im ${from} and I have a message for you: ${message}`,
      });
      console.log("Message sent: %s", info.messageId);
      return {sent:true, message:info.messageId};
    }catch(e){
        console.log('Error sending email: ',e)
        return {sent:false, message:e};
    }

  }

  