import {TDatabaseList} from "./TDatabaseList";
import {TDatabaseInfo} from "./TDatabaseInfo";


export function databaseInfo(apiKey: string, dbHashId: string, uri: string = "https://sksql.com/api/v1/databaseInfo"): Promise<TDatabaseInfo> {
    let payload = {
        "apiKey": apiKey,
        "dbHashId": dbHashId
    };

    return new Promise<TDatabaseList>((resolve, reject) => {
        fetch(uri, {
            method: 'post',
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'}
        }).then((value: Response) => {
            value.json().then((json) => {
                resolve(json);
            }).catch ((err) => {
                reject(err);
            })
        }).catch ((reason) => {
            reject(reason);
        });
    });
}