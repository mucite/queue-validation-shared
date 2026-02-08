import { z } from 'zod';
/**
 * Ethiopian phone number validation schema
 * Format: 09xxxxxxxx or 07xxxxxxxx
 */
export declare const phoneSchema: z.ZodString;
/**
 * Validates an Ethiopian phone number
 */
export declare const validatePhone: (phone: string) => boolean;
