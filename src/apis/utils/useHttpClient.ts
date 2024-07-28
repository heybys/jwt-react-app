import axios, { AxiosError } from 'axios';

const hostname = process.env.REACT_APP_SERVER_HOST ?? 'http://localhost';
const port = process.env.REACT_APP_SERVER_PORT ?? '8080';

const httpClient = axios.create({
  baseURL: `${hostname}:${port}`,
  withCredentials: true,
  headers: {
    'Content-Type': `application/json;charset=UTF-8`,
    Accept: 'application/json',
  },
});

const useHttpClient = () => {

  httpClient.interceptors.request.use(
    (request) => {
      return request;
    },
    (error: AxiosError) => {
      alert(error.message);
      return true;
    },
  );

  httpClient.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      alert(error.message);
      return true;
    },
  );

  return {
    httpClient,
  };
};

export default useHttpClient;
