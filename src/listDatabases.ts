import {TDatabaseList} from "./TDatabaseList";


export function listDatabases(apiKey: string, offsetRows: number, fetchRows: number, uri: string = "https://sksql.com/api/v1/listDatabases"): Promise<TDatabaseList> {
    let payload = {
        "apiKey": apiKey,
        "offset": offsetRows,
        "fetch": fetchRows
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