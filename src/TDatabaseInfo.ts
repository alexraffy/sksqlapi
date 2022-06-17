



export interface TDatabaseInfo {
    valid: boolean;
    created?: string;
    optionalName?: string;
    live?: boolean;
    connections?: number;
    tokens?: { token: string; validity: string }[];
    workers?: { address:string, isRelay: boolean, readOnly: boolean, status: string, heartbeat: string, connections: number}[];
    backupsInfo?: {filename: string, date: string, size: number}[];
    logsInfo?: {filename: string, date: string, workerId: string}[];
}