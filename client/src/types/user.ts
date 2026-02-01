interface UserGameInfo {
    faceit_elo: number;
    region: string;
    game_player_id: string;
    game_player_name: string;
    skill_level: number;
}

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
    games: { cs2: UserGameInfo }
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