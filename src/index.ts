import { exec_file } from "./file";
import { exec_prompt } from "./prompt";
import { exec_dns } from "./dns";
import * as dotenv from 'dotenv';
import { server } from "./server";

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
server(Number(process.env.PORT));