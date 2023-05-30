import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
  headers:{
    Authorization:`bearer ${Cookies.get("sid")}`
  }
});

export const getRequest = (url: string, callback: any) => {
  return instance
    .get(url)
    .then(({ data, status, statusText }) => {
      callback(data, {
        status,
        statusText,
      });
    })
    .catch((err) => {
      if (err.response) {
        return callback(err.response.data, {
          status: err.response.status,
          statusText: err.response.statusText,
        });
      }

      return callback(
        { msg: "Check Internet Connection" },
        {
          status: 0,
          statusText: "ERR_NETWORK",
        }
      );
    });
};

export const postRequest = (url: string, data: any, callback: any) => {
  return instance
    .post(url, data)
    .then(({ data, status, statusText }) => {
      callback(data, {
        status,
        statusText,
      });
    })
    .catch((err) => {
      if (err.response) {
        return callback(err.response.data, {
          status: err.response.status,
          statusText: err.response.statusText,
        });
      }

      return callback(
        { msg: "Check Internet Connection" },
        {
          status: 0,
          statusText: "ERR_NETWORK",
        }
      );
    });
};
