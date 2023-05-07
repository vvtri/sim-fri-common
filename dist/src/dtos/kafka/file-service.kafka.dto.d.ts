import { NonFunctionProperties, UserStatus } from 'shared';
export declare class UserCreated {
    id: number;
    status: UserStatus;
    phoneNumber: string;
    address: string;
    email: string;
    name: string;
    birthDate: Date;
    constructor(data: NonFunctionProperties<UserCreated>);
}
export declare class UserUpdated {
    id: number;
    status: UserStatus;
    phoneNumber: string;
    address: string;
    email: string;
    name: string;
    birthDate: Date;
    constructor(data: NonFunctionProperties<UserCreated>);
}
