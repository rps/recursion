// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to have to write it from scratch:

var stringifyJSON = function (obj) {
  if(typeof obj === 'string'){
    return '"' + obj + '"';
  }
  else if (Array.isArray(obj)){
    return '[' + obj.map(function(val){
      return stringifyJSON(val);
    }).join(',') + ']';
  }
  else if (obj && typeof obj === 'object'){
    var ans = [];
    for (var key in obj){
      if (obj[key] !== undefined && typeof obj[key] !== 'function'){
        ans.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + ans.join(',') + '}';
  }
  return obj + '';
};