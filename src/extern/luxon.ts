import { DateTime, Interval } from 'luxon';

export default function exec_luxon() {
    const agora = DateTime.now();
    const nasc = DateTime.fromFormat('19/03/2003', 'dd/MM/yyyy');
    const dif = Interval.fromDateTimes(nasc, agora).length('years');

    console.log('Hora de agora: ' + agora.hour);
    console.log('Dia que naci : ' + nasc.day);
    console.log('Minha idade  : ' + Math.floor(dif));
}