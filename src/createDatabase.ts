



export function createDatabase(apiKey: string, encryptionKey: string, optionalDatabaseName: string): Promise<string> {
    let payload = {
        "apiKey": apiKey,
        "encryptionKey": encryptionKey,
        "name": optionalDatabaseName
    };
    let uri = "https://sksql.com/api/v1/createDatabase";

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
                let databaseHashId = "";
                resolve(databaseHashId);
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