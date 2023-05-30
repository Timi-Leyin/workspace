import constants from "@/config/app";
import { postRequest } from "@/utils/request";
import Cookies from "js-cookie";

const loginAction = async(values:any, setProcessing:any)=>{
    setProcessing(true)
    const res = await postRequest(
        constants.routes.login,
        values,
        (data: any, status: any) => {
          if (status.status == 200) {
            Cookies.set("sid",data.token);
            // send tooltip
            window.location.replace("/home")
          } else {
            console.log("An Error Occured", status.status, status.statusText);
          }
        }
      );
    
     setProcessing(false)
}

export default loginAction