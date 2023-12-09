import { Channel } from "./channel";
import { Member } from "./member";

export interface Server {
    id: number,
    name: string,
    channels: Channel[],
    members: Member[]
}