import { z } from 'zod';
/**
 * User registration validation schema
 */
export declare const userRegistrationSchema: z.ZodObject<{
    firstName: z.ZodString;
    fatherName: z.ZodString;
    phone: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
/**
 * User login validation schema
 */
export declare const userLoginSchema: z.ZodObject<{
    phone: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
/**
 * User role validation schema
 */
export declare const userRoleSchema: z.ZodEnum<{
    CUSTOMER: "CUSTOMER";
    STAFF: "STAFF";
    PROVIDER: "PROVIDER";
    ADMIN: "ADMIN";
    SYSTEM: "SYSTEM";
}>;
/**
 * Extract TypeScript types from schemas
 */
export type UserRegistration = z.infer<typeof userRegistrationSchema>;
export type UserLogin = z.infer<typeof userLoginSchema>;
export type UserRoleValue = z.infer<typeof userRoleSchema>;
