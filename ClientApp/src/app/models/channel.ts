export enum ChannelType {
    Text,
    Audio,
    Video
}

export interface Channel {
    id: string,
    name: string,
    type: ChannelType
}