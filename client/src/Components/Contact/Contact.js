import React,{useState} from "react"
import ContactStyle from "./Contact.module.css"
import CircularProgress from '@mui/material/CircularProgress';
import DoneIcon from '@mui/icons-material/Done';

import {sendCustomerMessage} from "../../Action/customerContact"


const Contact = () => {
  const [messageSent,setMessageSent] = useState(false);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");

  const [customerMessage,setCustomerMessage] = useState({
    customerName:"",
    email:"",
    message:""
  });


  const handleMessageChange = (e)=>{
    const {name,value} = e.target;
    setCustomerMessage({
        ...customerMessage,
        [name]:value
    })
  }

  const handleMessageSubmit = async (e)=>{
    e.preventDefault()

    const customer_Provided_AllFields = customerMessage.customerName.length > 0 && customerMessage.email.length > 0 && customerMessage.message.length > 0;
  
    if(customer_Provided_AllFields){
      setLoading(true)
      const contact = await sendCustomerMessage(customerMessage);
  
      if(contact?.status === 200){
        setError("")
        setLoading(false)
        setMessageSent(true)
        setCustomerMessage({
          customerName:"",
          email:"",
          message:""
        });
      }else{
        setMessageSent(false)
        setLoading(false)
        setError(contact.data.message)
        
        
      }


      
    }else{
      setMessageSent(false)
      setError("You left one or more fields empty,you must provide data to all fields before trying to send message")
    }





  }


  return (
    <div className={ContactStyle.container}>
        <div className={ContactStyle.layout}>
            <div className={ContactStyle.img}>
                <img src="" alt="" />
            </div>
            <div className={ContactStyle.wrapper}>
                <h1>Let's Cha!</h1>
                {error.length < 1?
                  <p>Leave your name and email,we will contact you as soon as possible</p>

                  :

                  <p style={{color:"red"}}>{error}</p>
                
                }
               
                <form className={ContactStyle.form}>
                    <label htmlFor="email">EMAIL*</label>
                    <input type="text" onChange={handleMessageChange} value={customerMessage.email} name="email" placeholder="Your email ..." required />
                    <label htmlFor="customerName">{customerMessage.customerName.length>0?`Hello ${customerMessage.customerName}`:"Name*"}</label>
                    <input type="text" onChange={handleMessageChange} value={customerMessage.customerName} name="customerName" placeholder="Your name" required />
                    <label htmlFor="description">Small Description</label>
                    <textarea type="text" onChange={handleMessageChange} value={customerMessage.message} name="message" placeholder="I need a cool website for my bakery shop ... "></textarea>

                    <button onClick={handleMessageSubmit} type="submit" className={ContactStyle.btn} disabled={loading}>
                        {messageSent && <p style={{display:"flex",alignItems:"center",justifyContent:"center"}}>message sent <DoneIcon/></p>}
                        {(!messageSent && !loading) && "send message"}
                        {(!messageSent && loading) && <p style={{display:"flex",alignItems:"center",justifyContent:"center"}}><CircularProgress color="secondary" /></p>}
                    </button>
                    
                </form>
                
                
            </div>
        </div>
    </div> 
  )
}
export default Contact