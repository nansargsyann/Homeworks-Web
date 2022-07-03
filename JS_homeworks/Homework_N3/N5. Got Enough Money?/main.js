function itemsPurchased(store, wallet){
    function toNum(number){
        return Number(number.slice(1));
    }
    let resarr = [];
    Object.keys(store).forEach(elem => { if((toNum(store[elem])) <= toNum(wallet)){
                                            resarr.push(elem);
                                        }
                                    });
    return resarr.length != 0 ? resarr.sort() : "Nothing";
}

console.log(itemsPurchased({
    Water: "$1",
    Bread: "$3",
    TV: "$1,000",
    Fertilizer: "$20"
  }, "$300"));
  
  console.log(itemsPurchased({
    Apple: "$4",
    Honey: "$3",
    Fan: "$14",
    Bananas: "$4",
    Pan: "$100",
    Spoon: "$2"
  }, "$100"));
  
  console.log(itemsPurchased({
    Phone: "$999",
    Speakers: "$300",
    Laptop: "$5,000",
    PC: "$1200"
  }, "$1"));