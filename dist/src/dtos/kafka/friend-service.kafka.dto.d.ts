import { FriendRequestStatus, NonFunctionProperties } from 'shared';
export declare class FriendRequestCreatedKafkaPayload {
    id: number;
    status: FriendRequestStatus;
    requesterId: number;
    beRequestedId: number;
    constructor(data: NonFunctionProperties<FriendRequestCreatedKafkaPayload>);
}
export declare class FriendRequestUpdatedKafkaPayload extends FriendRequestCreatedKafkaPayload {
}
export declare class FriendRequestDeletedKafkaPayload {
    friendRequestId: number;
}
