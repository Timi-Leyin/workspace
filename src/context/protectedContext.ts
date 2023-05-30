import { createContext } from "react";


const protectedContext = createContext({
    loading:true,
    error:false,
    data:{},
})


export default protectedContext