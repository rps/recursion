// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function (json){
  var first = json.slice(0,1);
  if(json === "null"){
    return null;
  }
  else if (json === 'true'|| json === 'false'){
    return (json === 'true') ? true : false;
  }
  else if (!isNaN(+json)){
    return +json;
  }
  else if (first === '"'){
    return json.slice(1,json.length-1);
  }
  else if (first === "["){
    if (json === '[]') return [];
    var sliced = json.substring(1,json.length-1);
    if(sliced.indexOf('[') === -1){
      return sliced.split(',').map(function(item){
        return parseJSON(item);
      });
    }
    else {
    //   // can't use map on an initial split, as it will capture bad things 4]
    //   // return sliced.split(',').map(function(item){
    //     rewrite(sliced);
    //     if(item.indexOf('[') === -1 && item.indexOf(']') === -1){

    //       return parseJSON(item);
    //     }
    //     else {
    //       return (sliced.substring(sliced.indexOf('[')+1,
    //     sliced.lastIndexOf(']'))).split(',').map(function(item){

    //         return parseJSON(item);
    //       });
    //     }
    var newString = json.substring(1, json.length - 1), temp = [], finalArr = [], look = '';
    for (var i = 0; i <= newString.length; i++){
      look = newString.substring(i, i+1);
      if (look === ',' || i === newString.length){
        if (temp.length === 0){
          continue;
        }
        finalArr.push(+parseJSON(temp.join('')));
        temp = [];
      } else if (look === ']'){
        continue;
      } else if (look === '['){
        var a = newString.substring(i, newString.lastIndexOf(']') + 1);
        finalArr.push(parseJSON(a));
        i = newString.lastIndexOf(']') + 1;
      } else {
        temp.push(look);
      }
    }
    return finalArr;
  }
    }
};

var rewrite = function(str){
  var newArr = [];
  var newStr = "";
  for(i=0;i<str.length-1;i++){
    if(str.charAt(i) !== '[' && str.charAt(i) !== ','){
      newStr += str.charAt(i);
    }
    else if (str.charAt(i) === '['){
      newArr.push(newStr);
      newStr = "";
    }
  }
}
    // else {
    //   return (sliced.substring(sliced.indexOf('[')+1,
    //     sliced.lastIndexOf(']'))).split(',').map(function(item){
    //     return parseJSON(item);
    //   });
    // }




  // else if (first === "["){
  //   if(json === '[]') return [];
  //   var bracket = 1, index = 1, charArray = [], commaPos = 0, element;
  //   while (bracket > 0){
  //     commaPos = json.indexOf(',',commaPos);
  //     element = json.slice(index, commaPos);
  //     if(element.indexOf('[') === -1){
  //       charArray.push(element);
  //     }
  //   }
  //   // test out a for loop to walk along looking for [
  //   // var ret = (json.slice(1,json.length-1).split(',')).map(function(item){
  //   var sliced = json.substring(json.indexOf('[')+1,json.lastIndexOf(']')-1);
  // }





