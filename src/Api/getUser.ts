import { AxiosResponse } from 'axios';
import axios from './customAxios';
import { User } from '../Types/Data';

const getUser = async (email?: string): Promise<AxiosResponse<User, Error>> => {
  return await axios<User>({
    method: 'get',
    url: `api/get-user?email=${email}`,
  });
};

export default getUser;