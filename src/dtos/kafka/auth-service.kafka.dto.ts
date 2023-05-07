import { NonFunctionProperties } from '../../types';

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  UNVERIFIED = 'UNVERIFIED',
}

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
