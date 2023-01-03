import nodemailer from "nodemailer";
import validator from "email-validator"

export const customerContact = async(req,res)=>{
    const {customerName,email,message} = req.body;
    const developers = ["muhammadkeyton@gmail.com","mohaz1355@gmail.com"]

    //validate the provided email
    const emailIsValid = validator.validate(email)

    if(!emailIsValid) return res.status(400).json({message:"hmmm.. the email you provided doesn't look right🤔,please try again"})
    async function main() {
  
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user:process.env.USER,
          pass:process.env.PASS,
        },
        
      });
    
      // send mail to customer
      let customerMail = await transporter.sendMail({
        from: '<noreply.ultrawavetechnologies@gmail.com>',
        to:email,
        subject: `Hey ${customerName}😀`,
        html:`
          <p>Thank you for contacting ultrawave technologies,we have received your message and we will get back to you asap!.</p>
          <strong>This is an unmonitored mailbox,please don't reply because we won't see it.</strong>
        `,
      });
     
      //send mail to developers
      let developerMail = await transporter.sendMail({
        from: '<noreply.ultrawavetechnologies@gmail.com>', 
        to:`${developers.toString()}`,
        subject: `Hey developers😀`,
        text:`I got a client for you. \n \n Client Name: ${customerName} \n \n Client Message:\n \n " ${message} " \n \n Client Email: ${email}`,
      });
      
      if(customerMail.messageId && developerMail.messageId){
        res.status(200).json({message:"successfully notified client and developers",success:true})
      }else{
        res.status(400).json({message:"something is wrong"})
      }
      
     
  
    }
    
    main().catch(console.error);
      
}