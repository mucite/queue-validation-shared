import { z } from 'zod';
import { phoneSchema } from './phone.js';
import { CUSTOMER_PASSWORD_REGEX, BUSINESS_PASSWORD_REGEX } from '../constants/regex.js';
import { UserRoles } from '../enums/roles.js';

/**
 * Customer user registration validation schema
 * Password: 4+ characters, any combination
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
 * Business user registration validation schema (staff/admin/provider)
 * Password: 6+ characters, at least one letter and one number
 */
export const businessUserRegistrationSchema = z.object({
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
    .min(6, 'Password must be at least 6 characters')
    .regex(BUSINESS_PASSWORD_REGEX, 'Password must contain at least one letter and one number'),
});

/**
 * User login validation schema
 */
export const userLoginSchema = z.object({
  phone: phoneSchema,
  password: z.string().min(1, 'Password is required'),
});

/**
 * Business login validation schema
 * Validates password meets business requirements during login
 */
export const businessLoginSchema = z.object({
  phone: phoneSchema,
  password: z.string()
    .min(6, 'Password must be at least 6 characters')
    .regex(BUSINESS_PASSWORD_REGEX, 'Password must contain at least one letter and one number'),
});

/**
 * User role validation schema
 */
export const userRoleSchema = z.enum(UserRoles);

/**
 * Extract TypeScript types from schemas
 */
export type UserRegistration = z.infer<typeof userRegistrationSchema>;
export type BusinessUserRegistration = z.infer<typeof businessUserRegistrationSchema>;
export type UserLogin = z.infer<typeof userLoginSchema>;
export type BusinessLogin = z.infer<typeof businessLoginSchema>;
export type UserRoleValue = z.infer<typeof userRoleSchema>;
