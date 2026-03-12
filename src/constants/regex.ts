/**
 * Common regex patterns used across the application
 */
// Ethiopian phone number (09xxxxxxxx or 07xxxxxxxx)
export const ETHIOPIAN_PHONE_REGEX = /^0[79]\d{8}$/;
// Password: minimum 4 characters only (no complexity requirements)
export const PASSWORD_REGEX = /^.{4,}$/;
