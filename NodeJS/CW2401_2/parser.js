
module.exports.Parser = function(text){
    var symb = new Map();
    for (let index = 0; index < text.length; index++) {
        var element = text[index];
        if(symb.has(element)){
            symb.set(element,symb.get(element)+1);
        }
        else{
            symb.set(element, 1);
        }
    }
    function replacer(key, value) {
        if(value instanceof Map) {
          return {
            dataType: 'Map',
            value: Array.from(value.entries()),
          };
        } else {
          return value;
        }
      }
   
    var json = JSON.stringify(symb, replacer);
    return json;
}