import {createConnectionToken, createDatabase, deleteDatabase, kRights, listDatabases, TDatabaseList} from "sksqlapi";
import fetch from 'node-fetch';

if (!globalThis.fetch) {
    global["fetch"] = fetch;
    // @ts-ignore
    globalThis.fetch = fetch;

}


const apiKey = "6d8d9194-ae47-4b26-91b3-02a9d988929e"



createDatabase(apiKey,
    "",
    "dbTest",
    "http://localhost:30100/api/v1/createDatabase").then((dbHashId) => {
    console.log(dbHashId);

    createConnectionToken(apiKey,
        "",
        dbHashId,
        kRights.write,
        60,
        "testConnection",
        "http://localhost:30100/api/v1/createConnectionToken").then((token: string) => {
            console.log("token is: " + token);

            listDatabases(apiKey, "http://localhost:30100/api/v1/listDatabases").then((value: TDatabaseList) => {
                console.log("Deleting dBHashId: " + dbHashId);
                deleteDatabase(apiKey, dbHashId, "http://localhost:30100/api/v1/deleteDatabase").then((v) => {
                    console.log("Result: " + v);
                })

            });


        }).catch((error) => {
            console.dir(error);
    });




}).catch((r) => {
    console.dir(r);

});