/**
 * User roles in the queue management system
 */
export declare enum UserRole {
    CUSTOMER = "CUSTOMER",
    STAFF = "STAFF",
    PROVIDER = "PROVIDER",
    ADMIN = "ADMIN",
    SYSTEM = "SYSTEM"
}
export declare const UserRoles: readonly ["CUSTOMER", "STAFF", "PROVIDER", "ADMIN", "SYSTEM"];
export type UserRoleType = typeof UserRoles[number];
