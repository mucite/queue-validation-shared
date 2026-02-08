/**
 * Shared validation schemas and utilities for ui-queue and service-queue
 *
 * This package provides:
 * - Zod validation schemas for type-safe validation
 * - Common regex patterns
 * - Shared enums (user roles, appointment status, etc.)
 * - Auto-generated TypeScript types
 */
export * from './schemas/phone.js';
export * from './schemas/user.js';
export * from './enums/roles.js';
export * from './enums/appointmentStatus.js';
export * from './constants/regex.js';
