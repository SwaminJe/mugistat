export interface UserInfo {
    player_id: string;
    nickname: string;
    steam_nickname: string;
    avatar: string;
    country: string;
    activated_at: Date;
    faceit_url: string;
    friends_ids: string[];
    verified: boolean;
}

// export interface UserStat {
//     player_id: string;
//     nickname: string;
//     steam_nickname: string;
//     avatar: string;
//     country: string;
//     activated_at: Date;
//     faceit_url: string;
//     friends_ids: string[];
//     verified: boolean;
// }