import * as api from "../Api/api";

export const sendCustomerMessage = async(customerMessage)=>{
    try{
        const {data,status} = await api.sendMessage(customerMessage);
        return {data,status};
    }catch(error){
        const {data,status} = error.response;
        return {data,status};
    }
}



