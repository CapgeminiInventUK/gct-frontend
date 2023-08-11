import { AxiosResponse } from 'axios';
import axios from './customAxios';
import { UserCompetency } from '../Types/Data';

const postUser = async (userCompetencies: UserCompetency[], email?: string): Promise<AxiosResponse<any, Error>> => {
  return await axios<any>({
    method: 'post',
    url: 'api/post-user',
    data: {
        email,
        userCompetencies,
    }
  });
};

export default postUser;