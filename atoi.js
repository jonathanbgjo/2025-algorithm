/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    if(s.length <= 0) return 0
    let result = 0, neg = false; dict = {"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"0":0}, i =0;
    s = s.replace(/ /g,'');
    if(s[0] == '-'){
        neg = true;
        i = 1;
    }
    result = [];
    console.log(s)
    for(i;i<s.length;i++){
        console.log("s[i]");

        console.log(s[i]);
        if(dict[s[i]] === 0 && result.length == 0){
            continue;
        }
        if(dict[s[i]] != undefined){
            result.push(dict[s[i]])
        }else{
            break;
        }
    }
    if(neg){
        result.unshift("-");
    }
    return Number(result.join(""));
};