



export interface TDatabaseList {
    valid: boolean;
    numDatabases: number;
    databases: {
        dbHashId: string;
        created: string;
        encrypted: boolean;
        name: string;
        live: boolean;
    }[];
}