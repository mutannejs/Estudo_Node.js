import * as qs from 'node:querystring';

export function exec_querystring() {
    const base = 'https://siteviagens.com/';
    const paramsUrl = {
        state: "São Paulo",
        city: "Sorocaba"
    }
    const text = 'São Paulo e Sorocaba';

    const finalUrl = base + qs.stringify(paramsUrl);

    console.dir(paramsUrl);
    console.log(finalUrl);
    console.dir(qs.parse(finalUrl.replace(base, '')));

    const textEs = qs.escape(text);
    console.log(text);
    console.log(textEs);
    console.log(qs.unescape(textEs));
}