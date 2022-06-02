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
            try {
                value.json().then((json) => {
                    if (json.valid === true) {
                        resolve(json.token);
                    } else {
                        reject({error: "invalid"});
                    }
                }).catch((err) => {
                    reject(err);
                })
            } catch (e) {
                reject(e);
            }
        }).catch ((reason) => {
            reject(reason);
        })
    });

}