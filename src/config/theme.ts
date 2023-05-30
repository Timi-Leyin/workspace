import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: { Button: { 
    baseStyle: { 
      _focus: { boxShadow: "none",outline:"none" } 
    
    }
    
  } },
});

export default theme;