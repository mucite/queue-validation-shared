import { z } from 'zod';
/**
 * Customer user registration validation schema
 * Password: 4+ characters, any combination
 */
export declare const userRegistrationSchema: z.ZodObject<{
    firstName: z.ZodString;
    fatherName: z.ZodString;
    phone: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
/**
 * Business user registration validation schema (staff/admin/provider)
 * Password: 6+ characters, at least one letter and one number
 */
export declare const businessUserRegistrationSchema: z.ZodObject<{
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
 * Business login validation schema
 * Validates password meets business requirements during login
 */
export declare const businessLoginSchema: z.ZodObject<{
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
export type BusinessUserRegistration = z.infer<typeof businessUserRegistrationSchema>;
export type UserLogin = z.infer<typeof userLoginSchema>;
export type BusinessLogin = z.infer<typeof businessLoginSchema>;
export type UserRoleValue = z.infer<typeof userRoleSchema>;
