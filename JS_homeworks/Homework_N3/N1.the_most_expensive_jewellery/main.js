function mostExpensive(object){
    const sortobj = (Object.values(object)).sort((a, b) => a - b);
    const result = Object.keys(object).find(key => object[key] === sortobj[sortobj.length - 1]);
    return ("The most expensive one is the " + result);
}

console.log(mostExpensive ({
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
  }));
  
  console.log(mostExpensive({
    "Silver Bracelet": 280,
    "Gemstone Earrings": 180,
    "Diamond Ring": 3500
  }));
