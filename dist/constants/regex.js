/**
 * Common regex patterns used across the application
 */
// Ethiopian phone number (09xxxxxxxx or 07xxxxxxxx)
export const ETHIOPIAN_PHONE_REGEX = /^0[79]\d{8}$/;
// Password for customers: minimum 4 characters, any combination
export const CUSTOMER_PASSWORD_REGEX = /^.{4,}$/;
// Password for business users (staff/admin/provider): minimum 6 characters, at least one letter and one number
export const BUSINESS_PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
