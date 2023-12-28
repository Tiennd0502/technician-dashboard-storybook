import axios, { AxiosResponse } from 'axios';

const get = async <T>(url: string): Promise<T> => {
  const response = await axios.get(url);

  return response.data;
};

const post = async <T>(url: string, newData: T): Promise<AxiosResponse<T>> => {
  const response = await axios.post(url, newData);

  return response;
};

const put = async <T>(id: string, dataEdit: T): Promise<AxiosResponse<T>> => {
  const response = await axios.put(id, { ...dataEdit });
  return response;
};

const remove = async <T>(id: string): Promise<AxiosResponse<T>> => {
  const response = await axios.delete(id);
  return response;
};

export { get, post, put, remove };
