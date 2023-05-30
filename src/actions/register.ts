import constants from "@/config/app";
import { postRequest } from "@/utils/request";
import Cookies from "js-cookie";
const register = async (values: any,setProcessing:any) => {
  setProcessing(true)
  const res = await postRequest(
    constants.routes.signup,
    values,
    (data: any, status: any) => {
      if (status.status == 201) {
        Cookies.set("sid",data.token);
        // send tooltip
        window.location.replace("/home")
      } else {
        console.log("An Error Occured", status.status, status.statusText);
      }
    }
  );

 setProcessing(false)
};

export default register;
