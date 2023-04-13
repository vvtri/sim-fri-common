import { ValueTransformer } from 'typeorm';
export declare class DecimalColumnTransformer implements ValueTransformer {
    to(data?: number | null): number | null;
    from(data?: string | null): number | null;
}
