import { Profile } from "./profile";

export enum MemberRole {
    Admin,
    Moderator,
    Guest
}

export interface Member {
    id: number,
    role: MemberRole,
    profile: Profile
}