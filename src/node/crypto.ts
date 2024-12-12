import * as crypto from 'node:crypto';

export default function exec_crypto() {
    console.log("Gera bytes aleatórios:");
    console.log( crypto.randomBytes(16) );
    console.log("ut-8: " + crypto.randomBytes(32).toString('base64') );
    console.log("ascii: " + crypto.randomBytes(4).toString('ascii') );

    console.log("\nGera UUID aleatórios:");
    console.log( crypto.randomUUID() );
    console.log( crypto.randomUUID() );

    const { publicKey } = crypto.generateKeyPairSync('rsa', {modulusLength: 2048});
    console.log("\n" + publicKey );
}