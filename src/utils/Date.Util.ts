export function converteTempoEmSegundos(tempo:string | undefined) {
    if(!tempo){
        return;
    }
   const [horas,min,seg] = tempo.split(":");


   return (Number(horas )* 3600) + (Number(min) * 60) + Number(seg);
}