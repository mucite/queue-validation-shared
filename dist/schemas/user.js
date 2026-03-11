import { z } from 'zod';
import { phoneSchema } from './phone.js';
import { UserRoles } from '../enums/roles.js';
/**
 * User registration validation schema
 */
export const userRegistrationSchema = z.object({
    firstName: z.string()
        .trim()
        .min(2, 'First name must be at least 2 characters')
        .max(50, 'First name must not exceed 50 characters'),
    fatherName: z.string()
        .trim()
        .min(2, 'Father name must be at least 2 characters')
        .max(50, 'Father name must not exceed 50 characters'),
    phone: phoneSchema,
    password: z.string()
        .min(4, 'Password must be at least 4 characters'),
});
/**
 * User login validation schema
 */
export const userLoginSchema = z.object({
    phone: phoneSchema,
    password: z.string().min(1, 'Password is required'),
});
/**
 * User role validation schema
 */
export const userRoleSchema = z.enum(UserRoles);
