/*random eleman getirme fonksiyonu */

    export const GetRandom=(items)=>{
    const randomItem=items[Math.floor(Math.random()*items.length)];
    return(
        randomItem
    ) 
};