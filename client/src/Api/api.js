import axios from "axios";

const API = axios.create({
    baseURL: 'https://ultrawave.herokuapp.com',
    withCredentials: true,
    headers: {
      'content-type': 'application/json',
    }

});

export const sendMessage = (Message) => API.post("/customer/contact",Message);



