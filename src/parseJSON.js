// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function (json) {
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
    if(json === '[]') return [];
    
    // test out a for loop to walk along looking for [
    return (json.slice(1,json.length-1).split(',')).map(function(item){
      return parseJSON(item);
    });
  }
};
