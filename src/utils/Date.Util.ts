export function converteTempoEmSegundos(tempo:string | undefined) {
    if(!tempo){
        return;
    }

   const [min,seg] = tempo.split(":");    

   return  (Number(min) * 60) + Number(seg);
}