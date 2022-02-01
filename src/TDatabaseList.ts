



export interface TDatabaseList {
    databases: {
        dbHashId: string;
        created: string;
        live: boolean;
        users: number;
    }[];
}