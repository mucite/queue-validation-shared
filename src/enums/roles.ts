/**
 * User roles in the queue management system
 */
export enum UserRole {
  CUSTOMER = 'CUSTOMER',
  STAFF = 'STAFF',
  PROVIDER = 'PROVIDER',
  ADMIN = 'ADMIN',
  SYSTEM = 'SYSTEM',
}

export const UserRoles = ['CUSTOMER', 'STAFF', 'PROVIDER', 'ADMIN', 'SYSTEM'] as const;
export type UserRoleType = typeof UserRoles[number];