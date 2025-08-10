/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num =""
    if(x<0){
        num="-"
        x*=-1;
    }
    while(x>0){
        num += x%10;
        x= Math.floor(x /= 10);
    }
    return Number(num)
};