/*random eleman getirme fonksiyonu */

    export const GetRandom=(items)=>{
    const randomItem=items[Math.floor(Math.random()*items.length)];
    return(
        randomItem
    ) 
};

    export const RandomOptionsCount=(gelenler,option)=>{
        const RandomOption=gelenler.filter((item)=>{
            return(
                item===option
            )     
        })
        return(
            RandomOption.length
        )
    };