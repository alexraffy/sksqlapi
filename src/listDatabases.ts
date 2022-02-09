import {TDatabaseList} from "./TDatabaseList";


export function listDatabases(apiKey: string, uri: string = "https://sksql.com/api/v1/listDatabases"): Promise<TDatabaseList> {
    let payload = {
        "apiKey": apiKey
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