

export function revokeConnectionToken(apiKey: string,
                                      dbHashId: string,
                                      token: string
                                      ): Promise <boolean> {

    let payload = {
        "apiKey": apiKey,
        "dbHashId": dbHashId,
        "token": token
    };
    let uri = "https://sksql.com/api/v1/revokeConnectionToken";

    return new Promise<boolean>((resolve, reject) => {
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
                resolve(true);
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