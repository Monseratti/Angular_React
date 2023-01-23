let time = new Date();
module.exports.date = time;

module.exports.MyHello = function(name){
    let hours = time.getHours();
    if(hours<12){
        return `Good morning, ${name}`;
    }
    return `Dobryi den' everybody ${name}`;
}