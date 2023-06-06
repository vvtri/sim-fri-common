import { FriendRequestStatus, NonFunctionProperties } from 'shared';

export class FriendRequestCreatedKafkaPayload {
  id: number;
  status: FriendRequestStatus;
  requesterId: number;
  beRequestedId: number;

  constructor(data: NonFunctionProperties<FriendRequestCreatedKafkaPayload>) {
    Object.assign(this, data);
  }
}

export class FriendRequestUpdatedKafkaPayload extends FriendRequestCreatedKafkaPayload {}

export class FriendRequestDeletedKafkaPayload {
  friendRequestId: number;
}
