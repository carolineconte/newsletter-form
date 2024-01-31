import { IUser } from "../types/User";


type Error = {
  [key: string]: string;
}

export const validate = (data: IUser) => {
  const errors: Error = {};
  if (!data.name) {
    errors['name'] = 'Name is required!'
  }
  if (!data.email) {
    errors['email'] = 'Email is required!'
  }
  if (!data.agree) {
    errors['agree'] = 'You need to agree to the terms.'
  }
  return errors;
}