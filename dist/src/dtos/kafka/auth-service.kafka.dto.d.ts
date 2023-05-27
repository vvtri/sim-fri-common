import { NonFunctionProperties, UserProfileRelationshipStatus, UserStatus } from 'shared';
export declare class UserCreatedKafkaPayload {
    id: number;
    status: UserStatus;
    phoneNumber: string;
    email: string;
    constructor(data: NonFunctionProperties<UserCreatedKafkaPayload>);
}
export declare class UserUpdatedKafkaPayload extends UserCreatedKafkaPayload {
}
export declare class UserProfileCreatedKafkaPayload {
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
    constructor(data: NonFunctionProperties<UserProfileCreatedKafkaPayload>);
}
export declare class UserProfileUpdatedKafkaPayload extends UserProfileCreatedKafkaPayload {
}
