import { NonFunctionProperties, UserStatus } from 'shared';
export declare class UserCreatedPayload {
    id: number;
    status: UserStatus;
    phoneNumber: string;
    address: string;
    email: string;
    name: string;
    birthDate: Date;
    constructor(data: NonFunctionProperties<UserCreatedPayload>);
}
export declare class UserUpdatedPayload {
    id: number;
    status: UserStatus;
    phoneNumber: string;
    address: string;
    email: string;
    name: string;
    birthDate: Date;
    constructor(data: NonFunctionProperties<UserUpdatedPayload>);
}
