import { z } from 'zod';
import { ETHIOPIAN_PHONE_REGEX } from '../constants/regex.js';
/**
 * Ethiopian phone number validation schema
 * Format: 09xxxxxxxx or 07xxxxxxxx
 */
export const phoneSchema = z.string()
    .regex(ETHIOPIAN_PHONE_REGEX, 'Invalid Ethiopian phone number. Format: 09xxxxxxxx or 07xxxxxxxx');
/**
 * Validates an Ethiopian phone number
 */
export const validatePhone = (phone) => {
    return phoneSchema.safeParse(phone).success;
};
