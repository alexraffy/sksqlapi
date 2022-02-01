import {TDatabaseList} from "./TDatabaseList";


export function listDatabases(apiKey: string): Promise<TDatabaseList> {
    let payload = {
        "apiKey": apiKey
    };
    let uri = "https://sksql.com/api/v1/listDatabases";

    return new Promise<TDatabaseList>((resolve, reject) => {
        const xmlHttpReq = new XMLHttpRequest();
        xmlHttpReq.open("POST", uri, true);
        xmlHttpReq.setRequestHeader("Content-type", "application/json");

        xmlHttpReq.onreadystatechange = function () {
            if (xmlHttpReq.readyState === 4 && xmlHttpReq.status === 500) {
                reject({
                    status: xmlHttpReq.status,
                    statusText: xmlHttpReq.statusText
                });
            }
            if (xmlHttpReq.readyState === 4 && xmlHttpReq.status === 200) {
                let ret: TDatabaseList = {
                    databases: []
                }
                resolve(ret);
            }
        };
        xmlHttpReq.onerror = function () {
            reject({
                status: xmlHttpReq.status,
                statusText: xmlHttpReq.statusText
            });
        };
        xmlHttpReq.send(JSON.stringify(payload));
    });
}