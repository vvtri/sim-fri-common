import { NonFunctionProperties, UserStatus } from 'shared';

export class UserCreatedKafkaPayload {
  id: number;
  status: UserStatus;
  phoneNumber: string;
  address: string;
  email: string;
  name: string;
  birthDate: Date;

  constructor(data: NonFunctionProperties<UserCreatedKafkaPayload>) {
    Object.assign(this, data);
  }
}

export class UserUpdatedKafkaPayload {
  id: number;
  status: UserStatus;
  phoneNumber: string;
  address: string;
  email: string;
  name: string;
  birthDate: Date;

  constructor(data: NonFunctionProperties<UserUpdatedKafkaPayload>) {
    Object.assign(this, data);
  }
}
