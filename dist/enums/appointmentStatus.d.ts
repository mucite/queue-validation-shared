/**
 * Appointment status values
 */
export declare enum AppointmentStatus {
    PENDING = "PENDING",
    CONFIRMED = "CONFIRMED",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED",
    MISSED = "MISSED"
}
export declare const AppointmentStatuses: readonly ["PENDING", "CONFIRMED", "COMPLETED", "CANCELLED", "MISSED"];
export type AppointmentStatusType = typeof AppointmentStatuses[number];
