export declare class BaseEntity {
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    version: number;
}
export declare class BaseEntityWithoutDeleteAndVersion {
    createdAt: Date;
    updatedAt: Date;
}
export declare class BaseEntityWithoutDelete {
    createdAt: Date;
    updatedAt: Date;
    version: number;
}
export declare class BaseEntityWithoutUpdate {
    createdAt: Date;
    deletedAt: Date;
    version: number;
}
export declare class BaseEntityWithoutUpdateAndVersion {
    createdAt: Date;
    deletedAt: Date;
}
export declare class BaseEntityWithoutUpdateAndVersionAndDelete {
    createdAt: Date;
    deletedAt: Date;
}
