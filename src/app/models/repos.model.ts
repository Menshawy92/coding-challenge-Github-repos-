export interface ItemsModule {
    items: ReposModule[]
}

export interface AvatarItemsModule {
    avatar_url?: string;
}
export interface ReposModule {
    id: Number;
    name?: string;
    description?: string;
    stargazers_count?: number;
    open_issues?: number;
    owner?: AvatarItemsModule
}


