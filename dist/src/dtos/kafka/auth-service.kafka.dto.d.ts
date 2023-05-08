import { NonFunctionProperties, UserStatus } from 'shared';
export declare class UserCreatedKafkaPayload {
    id: number;
    status: UserStatus;
    phoneNumber: string;
    email: string;
    constructor(data: NonFunctionProperties<UserCreatedKafkaPayload>);
}
export declare class UserUpdatedKafkaPayload {
    id: number;
    status: UserStatus;
    phoneNumber: string;
    address: string;
    constructor(data: NonFunctionProperties<UserUpdatedKafkaPayload>);
}
