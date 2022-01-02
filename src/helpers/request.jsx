import axios from "axios";
import { url } from "./env";
// import AuthHelper from "../libraries/auth-helper";

const getHeader = async () => {
  const token = localStorage.getItem("t");
  let bearerToken = `Bearer ${token}`;
  let myHeader = {
    // Authorization: bearerToken,
    // contentType: 'text/plain',
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    // crossDomain: true,
    "Access-Control-Allow-Headers": "content-type"
    // contentType: undefined

  };
  return myHeader;
};

const resultAxios = async (conf) => {
  const {
    method,
    endpoint,
    data,
    id,
    headers,
    params,
    responseType,
    customResponse,
  } = conf;
  return new Promise((resolve) => {
    const myId = id ? `/${id}` : ``;
    const res = axios({
      method,
      url: `${url}/${endpoint}${myId}`,
      data,
      headers,
      params,
      responseType,
    })
      .then((e) => {
        console.log('response',e)
        if (customResponse) {
          customResponse(e);
        } else {
          return { data: e?.data, status: e?.status};
        }
      })
      .catch((e) => {
        if (e) {
          // if (e?.response && e?.response?.status === 401) {
          //   message.info(`Token expired`).then((res) => {
          //     localStorage.clear();
          //     // window.location = "/login";
          //   });
          // } else {
          //   message.error(`Something went wrong, please contact administrator`);
          // }
          let errorStatus = "";
          if (!e.response) {
            // network error
            errorStatus = "Error: Network Error";
          } else {
            errorStatus = e.response.data.message;
          }
          return {
            data: e?.response?.data,
            status: e?.response?.status,
            message: errorStatus,
          };
        }
      });
    resolve(res);
  });
};

const get = async (conf) => {
  const headers = await getHeader();
  return await resultAxios({ method: "get", headers, ...conf });
};

const post = async (conf) => {
  const headers = await getHeader();
  return await resultAxios({ method: "POST", headers, ...conf });
};

const postWithNoHeaders = async (conf) => {
  return await resultAxios({ method: "POST", ...conf });
};

const getWithNoHeaders = async (conf) => {
  return await resultAxios({ method: "GET", ...conf });
};

const patch = async (conf) => {
  const headers = await getHeader();
  return await resultAxios({
    method: "PATCH",
    headers,
    ...conf,
  });
};

const put = async (conf) => {
  const headers = await getHeader();
  return await resultAxios({
    method: "PUT",
    headers,
    ...conf,
  });
};

const del = async (conf) => {
  const headers = await getHeader();
  return await resultAxios({ method: "DELETE", headers, ...conf });
};

const req = { get, post, put, patch, del, postWithNoHeaders, getWithNoHeaders, getHeader };
export default req;
export { get, post, put, patch, del, postWithNoHeaders, getWithNoHeaders };
