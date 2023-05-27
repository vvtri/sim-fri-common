import {
  NonFunctionProperties,
  UserProfileRelationshipStatus,
  UserStatus,
} from 'shared';

export class UserCreatedKafkaPayload {
  id: number;
  status: UserStatus;
  phoneNumber: string;
  email: string;

  constructor(data: NonFunctionProperties<UserCreatedKafkaPayload>) {
    Object.assign(this, data);
  }
}

export class UserUpdatedKafkaPayload extends UserCreatedKafkaPayload {}

export class UserProfileCreatedKafkaPayload {
  id: number;
  address: string;
  name: string;
  birthDate: Date;
  workplace: string;
  school: string;
  hometown: string;
  relationshipStatus: UserProfileRelationshipStatus;
  avatarId: number;
  userId: number;

  constructor(data: NonFunctionProperties<UserProfileCreatedKafkaPayload>) {
    Object.assign(this, data);
  }
}

export class UserProfileUpdatedKafkaPayload extends UserProfileCreatedKafkaPayload {}
