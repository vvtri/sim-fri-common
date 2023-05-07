import { NonFunctionProperties, UserStatus } from 'shared';

export class UserCreatedPayload {
  id: number;
  status: UserStatus;
  phoneNumber: string;
  address: string;
  email: string;
  name: string;
  birthDate: Date;

  constructor(data: NonFunctionProperties<UserCreatedPayload>) {
    Object.assign(this, data);
  }
}

export class UserUpdatedPayload {
  id: number;
  status: UserStatus;
  phoneNumber: string;
  address: string;
  email: string;
  name: string;
  birthDate: Date;

  constructor(data: NonFunctionProperties<UserUpdatedPayload>) {
    Object.assign(this, data);
  }
}
