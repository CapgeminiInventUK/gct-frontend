import { AxiosResponse } from 'axios';
import axios from './customAxios';
import { Competency } from '../Types/Data';

const getCompetencies = async (): Promise<AxiosResponse<Competency[], Error>> => {
  return await axios<Competency[]>({
    method: 'get',
    url: 'api/get-competencies',
  });
};

export default getCompetencies;