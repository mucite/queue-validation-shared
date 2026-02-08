/**
 * Common regex patterns used across the application
 */
// Ethiopian phone number (09xxxxxxxx or 07xxxxxxxx)
export const ETHIOPIAN_PHONE_REGEX = /^0[79]\d{8}$/;
// Password: minimum 8 characters, at least one uppercase, one lowercase, one digit
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
