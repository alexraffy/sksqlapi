

export function deleteDatabase(apiKey: string,
                               dbHashId: string,
                               uri: string = "https://sksql.com/api/v1/deleteDatabase"): Promise<boolean> {
    let payload = {
        "apiKey": apiKey,
        "dbHashId": dbHashId
    };


    return new Promise<boolean>((resolve, reject) => {
        fetch(uri, {
            method: 'post',
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'}
        }).then((value: Response) => {
            value.json().then((json) => {
                resolve(json.valid);
            }).catch ((err) => {
                reject(err);
            })
        }).catch ((reason) => {
            reject(reason);
        })
    });


}