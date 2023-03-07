import { v4 as uuidv4 } from 'uuid';

export const auth = (email: string, password: string) => {
  return { AccessToken: uuidv4() }
}