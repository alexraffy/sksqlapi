



export function createDatabase(apiKey: string,
                               encryptionKey: string,
                               optionalDatabaseName: string,
                               uri: string = "https://sksql.com/api/v1/createDatabase"
                               ): Promise<string> {
    let payload = {
        "apiKey": apiKey,
        "encryptionKey": encryptionKey,
        "name": optionalDatabaseName
    };

    return new Promise<string>((resolve, reject) => {

        fetch(uri, {
            method: 'post',
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'}
        }).then((value: Response) => {
            value.json().then((json) => {
                resolve(json.dbHashId);
            }).catch ((err) => {
                reject(err);
            })
        }).catch ((reason) => {
            reject(reason);
        })

    });


}