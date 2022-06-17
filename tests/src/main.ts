import {createConnectionToken, createDatabase, databaseInfo, kRights, listDatabases} from "sksqlapi";
import fetch from 'node-fetch';

if (!globalThis.fetch) {
    global["fetch"] = fetch;
    // @ts-ignore
    globalThis.fetch = fetch;

}




const apiKey = '';

listDatabases(apiKey, 0, 25).then((list) => {
    console.dir(list);

    databaseInfo(apiKey, "").then((di) => {
        console.dir(di);
    }).catch((err) => {
        console.dir(err);
    });

}).catch((e) => {
    console.dir(e);
})



/*
createDatabase(apiKey,
    "",
    "TestDB").then((dbHashId) => {
    console.log(dbHashId);

    createConnectionToken(apiKey,
        "",
        dbHashId,
        kRights.write,
        60,
        "testConnection").then((token: string) => {
            console.log("token is: " + token);



        }).catch((error) => {
            console.dir(error);
    });




}).catch((r) => {
    console.dir(r);

});


 */
