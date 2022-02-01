import {kRights} from "./kRights";


export function createConnectionToken(apiKey: string,
                                      encryptionKey: string,
                                      dbHashId: string,
                                      rights: kRights,
                                      validity: number,
                                      optionalName: string): Promise <string> {

    let payload = {
        "apiKey": apiKey,
        "encryptionKey": encryptionKey,
        "dbHashId": dbHashId,
        "rights": rights,
        "name": optionalName
    };
    let uri = "https://sksql.com/api/v1/createConnectionToken";

    return new Promise<string>((resolve, reject) => {
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
                let token = "";
                resolve(token);
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