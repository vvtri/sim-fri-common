import { NonFunctionProperties, UserStatus } from 'shared';
export declare class UserCreatedKafkaPayload {
    id: number;
    status: UserStatus;
    phoneNumber: string;
    address: string;
    email: string;
    name: string;
    birthDate: Date;
    constructor(data: NonFunctionProperties<UserCreatedKafkaPayload>);
}
export declare class UserUpdatedKafkaPayload {
    id: number;
    status: UserStatus;
    phoneNumber: string;
    address: string;
    email: string;
    name: string;
    birthDate: Date;
    constructor(data: NonFunctionProperties<UserUpdatedKafkaPayload>);
}
