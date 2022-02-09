import {kRights} from "./kRights";


export function createConnectionToken(apiKey: string,
                                      encryptionKey: string,
                                      dbHashId: string,
                                      rights: kRights,
                                      validity: number,
                                      optionalName: string,
                                      uri: string = "https://sksql.com/api/v1/createConnectionToken"): Promise <string> {


    let payload = {
        "apiKey": apiKey,
        "encryptionKey": encryptionKey,
        "dbHashId": dbHashId,
        "validityInMinutes": validity,
        "rights": rights,
        "name": optionalName
    };


    return new Promise<string>((resolve, reject) => {
        fetch(uri, {
            method: 'post',
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'}
        }).then((value: Response) => {
            value.json().then((json) => {
                resolve(json.token);
            }).catch ((err) => {
                reject(err);
            })
        }).catch ((reason) => {
            reject(reason);
        })
    });

}