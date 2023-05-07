import { NonFunctionProperties, UserStatus } from 'shared';

export class UserCreated {
  id: number;
  status: UserStatus;
  phoneNumber: string;
  address: string;
  email: string;
  name: string;
  birthDate: Date;

  constructor(data: NonFunctionProperties<UserCreated>) {
    Object.assign(this, data);
  }
}

export class UserUpdated {
  id: number;
  status: UserStatus;
  phoneNumber: string;
  address: string;
  email: string;
  name: string;
  birthDate: Date;

  constructor(data: NonFunctionProperties<UserCreated>) {
    Object.assign(this, data);
  }
}
