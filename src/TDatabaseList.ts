



export interface TDatabaseList {
    valid: boolean;
    databases: {
        dbHashId: string;
        created: string;
        encrypted: boolean;
        name: string;
        live: boolean;
    }[];
}