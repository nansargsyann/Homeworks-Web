//good solution from google
// function rgbToHex(r, g, b) {
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   }
// console.log(rgbToHex(220, 51, 255)); 
  
//bad solution from me
function rgbtohex(rgb){
  let hex = "#";
  let strRgb = rgb.match(/\d+/g);

  function mult(rgb, i){
    if (i <= 9){
      return i;
    }
    switch(i){
      case 10:
        return "a";
      case 11:
        return "b";
      case 12:
        return "c";
      case 13:
        return "d";
      case 14:
        return "e";
      case 15:
        return "f";
    }
  }
  strRgb.forEach(element => { hex += mult(element, Math.trunc(element / 16));
                              hex += mult(element, ((element / 16) - Math.trunc(element / 16)) * 16);
  });

  return hex; 

}
  console.log(rgbtohex("rgb(220, 51, 255)")); 
  console.log(rgbtohex("rgb(0, 128, 192)"));
  console.log(rgbtohex("rgb(45, 255, 192)"));
  console.log(rgbtohex("rgb(0, 0, 0)"));