import axios from "axios";


const httpRequest = axios.create({
  baseURL: '',
});

// httpRequest.interceptors.request.use((config) => {
//   config.headers["Authorization"] =
//     "Bearer " + window.localStorage.getItem("token");
//   return config;
// });

httpRequest.interceptors.response.use(
  (response) => {
    console.log('res',response)
    return response;
  },
  (error) => {
    console.log('err',error)
    return Promise.reject(error);
  }
);

export default httpRequest;
