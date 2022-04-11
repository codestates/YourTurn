import axios from "axios"

export const URL = "http://localhost.com/4000"

const cookieOption = {
    headers: {
      Accept: "application/json",
  
      "Content-Type": "application/json",
  
      Cache: "no-cache",
    },
  
    withCredentials: true,
  };

  export const postSignIn = async (body) => {
    try{
        const data = await axios.post(`${URL}/user/signin`, body, cookieOption)
    }catch(e){
        throw(e)
    }
  }

