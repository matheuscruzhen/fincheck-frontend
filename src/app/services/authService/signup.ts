import { delay } from '../../utils/delay';
import { httpClient } from '../httpClient';

export interface SignupParams {
  name: string;
  email: string;
  password: string;
}

interface SignupResponse {
  accessToken: string;
}

export async function signup(params: SignupParams) {
  await delay();
  const { data } = await httpClient.post<SignupResponse>(
    '/auth/signup',
    params
  );
  return data;
}
