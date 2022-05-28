import axios from "axios";

export class Requests {

    static async Login(email:string, password:string){
        const url = "http://9c17-186-250-111-153.ngrok.io";
       
        try {
            const config = {
                method: "post",
                url: `${url}/login`,
                data: {
                  email: email,
                  password:password,
                }
              }
              const response = await axios(config);
                   return response.data
                  
        }catch(e){
            console.log('erro ao relizar login : ',e);
            return false
        }
    
    }

    static async getScheduleByUser(id:string){
        const url = "http://9c17-186-250-111-153.ngrok.io";
       
        try {
              const response = await axios({
                method: "get",
                url: `${url}/scheduling/user/${id}`,
              });
                   return response.data
                  
        }catch(e){
            console.log('erro ao relizar login : ',e);
            return false
        }
    }
}