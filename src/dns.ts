import * as dns from 'node:dns';

export async function exec_dns() {
    const urlGoogle = 'google.com';

    const defaultServer = () => {
        return dns.promises.resolve4(urlGoogle);
    }

    const alternativeServer = () => {
        dns.setServers(['1.1.1.1']);
        return dns.promises.resolve4(urlGoogle);
    }

    const nameServer = async () => {
        return dns.promises.resolveNs(urlGoogle);
    }

    try {
        console.time("server padrao");
        let addresses = await defaultServer();
        console.timeEnd("server padrao");
        console.log("Recebido os seguintes endereços:");
        console.dir(addresses);

        console.time("server alternativo");
        addresses = await alternativeServer();
        console.timeEnd("server alternativo");
        console.log("Recebido os seguintes endereços:");
        console.dir(addresses);

        console.log("Os nomes dos servidores para esse domínio são:");
        console.dir(await nameServer());
    } catch(error) {
        console.error((error as NodeJS.ErrnoException).message);
    }
}