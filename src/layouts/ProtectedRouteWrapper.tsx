import React, { useEffect, useState } from "react";
import protectedContext from "@/context/protectedContext";
import { getRequest } from "@/utils/request";
import { Spinner } from "@chakra-ui/react";
import constants from "@/config/app";
const ProtectedRouteWrapper = ({ children }: { children: any }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    getRequest(constants.routes.me, (data: any, { status }: { status: number }) => {
      setLoading(false);
      if (status == 200) {
        setData(data.data);
      } else {
        // window.location.replace("/login")
        setError(true);
      }
    });
  }, []);
  return (
    <protectedContext.Provider
      value={{
        loading,
        error,
        data,
      }}
    >
      {/* {
        !loading && !error? children : <Spinner />
      } */}
      {children}
    </protectedContext.Provider>
  );
};

export default ProtectedRouteWrapper;
