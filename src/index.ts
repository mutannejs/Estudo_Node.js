import * as dotenv from 'dotenv';
import exec_file from "./node/file";
import exec_prompt from "./node/prompt";
import exec_dns from "./node/dns";
import server from "./node/server";
import exec_querystring from "./node/querystring";
import exec_crypto from './node/crypto';
import exec_luxon from './extern/luxon';

dotenv.config();

// IO, console e Env
/* console.log("=== prompt ===");
exec_prompt()
    .then(() => {
        console.log("\n=== file ===");
        return exec_file();
    })
    .then(() => {
        console.log("\n=== feito por " + process.env.AUTHOR);
    });*/

// DNS
// exec_dns();

// HTTP
//server(Number(process.env.PORT));

// querystring
// exec_querystring()

// crypto
// exec_crypto();

// Luxon
exec_luxon();